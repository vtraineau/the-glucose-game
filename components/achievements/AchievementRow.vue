<template>
  <div
    class="flex flex-row items-center w-full md:max-w-lg bg-base-300 px-4 py-2 rounded space-x-4"
    :class="{
      'bg-base-200': completedDate,
    }"
  >
    <Icon
      :name="icon"
      size="32"
      class="shrink-0"
      :class="{
        'text-primary': completedDate,
      }"
    />
    <div class="flex flex-col">
      <div class="font-bold">
        {{ name }}
      </div>
      <div class="text-xs">
        {{ description }}
      </div>
    </div>
    <div class="flex flex-col items-end grow pt-1">
      <div class="flex flex-col items-end w-full max-w-32 min-w-32 space-y-2">
        <ClientOnly>
          <div
            v-if="completedDate"
            class="flex flex-row w-full items-center justify-between px-1"
          >
            <div class="text-xs">
              Completed:
            </div>
            <div
              class="text-xs"
            >
              {{ completedDate }}
            </div>
          </div>
        </ClientOnly>
        <label
          v-if="goal"
          class="form-control w-full grow"
        >
          <progress
            class="progress progress-primary w-full"
            :value="progress"
            :max="goal"
          />
          <div class="label pt-1">
            <span class="label-text text-xs">Progress:</span>
            <span class="label-text-alt text-xs">{{ progress ?? 0 }}/{{ goal }}</span>
          </div>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  description: string
  icon: string
  completedDate?: string | undefined
  progress?: number | undefined
  goal?: number | undefined
}>()
</script>
