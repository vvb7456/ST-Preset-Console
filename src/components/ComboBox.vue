<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted, onBeforeUnmount } from 'vue';

const props = withDefaults(defineProps<{
  modelValue: string;
  options: string[];
  placeholder?: string;
}>(), {
  placeholder: '',
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();

const rootRef = ref<HTMLElement | null>(null);
const inputRef = ref<HTMLInputElement | null>(null);
const open = ref(false);
const hoverIndex = ref(-1);
const dropdownStyle = ref<Record<string, string>>({});

const filtered = computed(() => props.options);
const isReadOnly = computed(() => props.options.length > 0);

function updatePosition(): void {
  const el = inputRef.value;
  if (!el) return;
  const rect = el.getBoundingClientRect();
  dropdownStyle.value = {
    position: 'fixed',
    left: `${rect.left}px`,
    top: `${rect.bottom + 2}px`,
    width: `${rect.width}px`,
    zIndex: '10000',
  };
}

function openDropdown(): void {
  if (props.options.length === 0) return;
  open.value = true;
  hoverIndex.value = -1;
  nextTick(updatePosition);
}

function close(): void {
  open.value = false;
  hoverIndex.value = -1;
}

function toggle(): void {
  if (open.value) close();
  else openDropdown();
}

function onSelect(value: string): void {
  emit('update:modelValue', value);
  close();
}

function onInput(e: Event): void {
  emit('update:modelValue', (e.target as HTMLInputElement).value);
  if (!open.value && props.options.length > 0) {
    open.value = true;
  }
  hoverIndex.value = -1;
  nextTick(updatePosition);
}

function onKeyDown(e: KeyboardEvent): void {
  if (!open.value) return;
  const list = filtered.value;
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    hoverIndex.value = Math.min(hoverIndex.value + 1, list.length - 1);
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    hoverIndex.value = Math.max(hoverIndex.value - 1, 0);
  } else if (e.key === 'Enter') {
    if (hoverIndex.value >= 0 && hoverIndex.value < list.length) {
      e.preventDefault();
      onSelect(list[hoverIndex.value]);
    } else {
      close();
    }
  } else if (e.key === 'Escape') {
    e.preventDefault();
    close();
  }
}

function onDocClick(e: MouseEvent): void {
  const target = e.target as Node;
  if (rootRef.value?.contains(target)) return;
  const dropdown = document.getElementById('stmp-combobox-dropdown');
  if (dropdown?.contains(target)) return;
  close();
}

function onScroll(): void {
  if (open.value) close();
}

function onResize(): void {
  if (open.value) nextTick(updatePosition);
}

onMounted(() => {
  document.addEventListener('mousedown', onDocClick, true);
  window.addEventListener('scroll', onScroll, true);
  window.addEventListener('resize', onResize);
});

onBeforeUnmount(() => {
  document.removeEventListener('mousedown', onDocClick, true);
  window.removeEventListener('scroll', onScroll, true);
  window.removeEventListener('resize', onResize);
});

watch(() => props.modelValue, (v) => {
  if (inputRef.value && inputRef.value.value !== v) {
    inputRef.value.value = v;
  }
});
</script>

<template>
  <div ref="rootRef" class="stmp-combobox" :class="{ 'has-options': options.length > 0 }">
    <input
      ref="inputRef"
      class="text_pole"
      type="text"
      :value="modelValue"
      :placeholder="placeholder"
      :readonly="isReadOnly"
      autocomplete="off"
      @focus="openDropdown"
      @input="onInput"
      @keydown="onKeyDown"
    />
    <i
      v-if="options.length > 0"
      class="fa-solid fa-chevron-down stmp-combobox-arrow"
      :class="{ rotated: open }"
      @mousedown.prevent="toggle"
    />
    <Teleport to="body">
      <div
        v-if="open && filtered.length > 0"
        id="stmp-combobox-dropdown"
        class="stmp-combobox-dropdown"
        :style="dropdownStyle"
      >
        <div
          v-for="(item, i) in filtered"
          :key="item"
          class="stmp-combobox-option"
          :class="{ active: i === hoverIndex }"
          @mousedown.prevent="onSelect(item)"
          @mouseenter="hoverIndex = i"
        >
          {{ item }}
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.stmp-combobox {
  position: relative;
  display: flex;
  flex: 1;
  min-width: 0;
}

.stmp-combobox input.text_pole {
  width: 100%;
}

.stmp-combobox.has-options input.text_pole {
  padding-right: 24px;
  cursor: pointer;
}

.stmp-combobox-arrow {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  font-size: calc(var(--mainFontSize, 14px) * 0.75);
  color: var(--SmartThemeEmColor, rgb(145, 145, 145));
  pointer-events: auto;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.stmp-combobox-arrow:hover {
  color: var(--SmartThemeBodyColor, #ccc);
}

.stmp-combobox-arrow.rotated {
  transform: translateY(-50%) rotate(180deg);
}

.stmp-combobox-dropdown {
  background-color: var(--SmartThemeBlurTintColor, rgba(20, 20, 30, 0.9));
  border: 1px solid var(--SmartThemeBorderColor, rgba(0, 0, 0, 0.5));
  border-radius: 10px;
  box-shadow: 0 0 5px black;
  backdrop-filter: blur(calc(var(--SmartThemeBlurStrength, 5px) * 2));
  color: var(--SmartThemeBodyColor, #ccc);
  text-shadow: 0 0 calc(var(--shadowWidth, 1) * 1px) var(--SmartThemeShadowColor, rgba(0, 0, 0, 0.5));
  font-family: var(--mainFontFamily, sans-serif);
  font-size: var(--mainFontSize, 14px);
  max-height: 260px;
  overflow-y: auto;
  padding: 4px 0;
  user-select: none;
}

.stmp-combobox-option {
  padding: 5px 12px;
  color: var(--SmartThemeBodyColor, #ccc);
  opacity: 0.5;
  transition: opacity var(--animation-duration-2x, 0.2s) ease-in-out;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.stmp-combobox-option.active {
  opacity: 1;
}
</style>
