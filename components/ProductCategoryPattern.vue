<script setup>
defineProps({
  index: { type: String, required: true }
})
</script>

<template>
  <svg class="absolute inset-0 h-full w-full" viewBox="0 0 420 220" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <template v-if="index === '01'">
      <g fill="none" stroke="currentColor" stroke-width="9" opacity=".2">
        <circle cx="320" cy="110" r="70" />
        <circle cx="320" cy="110" r="42" />
        <circle cx="320" cy="110" r="14" />
      </g>
    </template>
    <template v-else-if="index === '02'">
      <g fill="none" stroke="currentColor" opacity=".2">
        <path d="M230 0c-40 52-40 168 0 220M275 0c-40 52-40 168 0 220M320 0c-40 52-40 168 0 220M365 0c-40 52-40 168 0 220" stroke-width="10" />
      </g>
    </template>
    <template v-else-if="index === '03'">
      <g fill="none" stroke="currentColor" stroke-width="5" opacity=".22">
        <path d="M245 110a40 40 0 0 1 80 0M220 110a65 65 0 0 1 130 0M195 110a90 90 0 0 1 180 0" />
        <circle cx="285" cy="110" r="9" fill="currentColor" stroke="none" />
      </g>
    </template>
    <template v-else-if="index === '04'">
      <g fill="none" stroke="currentColor" stroke-width="7" opacity=".2">
        <ellipse cx="320" cy="55" rx="72" ry="26" />
        <ellipse cx="320" cy="85" rx="72" ry="26" />
        <ellipse cx="320" cy="115" rx="72" ry="26" />
        <ellipse cx="320" cy="145" rx="72" ry="26" />
        <ellipse cx="320" cy="175" rx="72" ry="26" />
      </g>
    </template>
    <template v-else-if="index === '05'">
      <g fill="none" stroke="currentColor" stroke-width="4" opacity=".23">
        <path d="M220 35h70v45h85M245 190v-55h75V95h65M210 110h45v25M290 35v-20M320 135h70" />
        <circle cx="220" cy="35" r="7" fill="currentColor" /><circle cx="375" cy="80" r="7" fill="currentColor" />
        <circle cx="245" cy="190" r="7" fill="currentColor" /><circle cx="385" cy="95" r="7" fill="currentColor" />
      </g>
    </template>
    <template v-else-if="index === '06'">
      <g fill="none" stroke="currentColor" stroke-width="13" opacity=".18">
        <path d="m210 220 125-220M260 220 385 0M310 220 435 0" />
      </g>
    </template>
    <template v-else-if="index === '07'">
      <g fill="none" stroke="currentColor" stroke-width="4" opacity=".2">
        <path d="m230 40 32-18 32 18v36l-32 18-32-18Zm64 36 32-18 32 18v36l-32 18-32-18Zm-64 36 32-18 32 18v36l-32 18-32-18Zm64 36 32-18 32 18v36l-32 18-32-18Z" />
      </g>
    </template>
    <template v-else>
      <g fill="none" stroke="currentColor" opacity=".2">
        <path d="M205 35h200M205 80h200M205 125h200M205 170h200M230 10v200M275 10v200M320 10v200M365 10v200" stroke-width="3" />
        <circle cx="320" cy="125" r="45" fill="currentColor" stroke="none" opacity=".35" />
      </g>
    </template>
  </svg>
</template>
