<template>
  <footer :class="['w-full', 'text-sm', 'h-28']">
    <div class="bottom-0 left-0 h-28 w-full shadow-lg bg-gray-200">
      <div class="mx-auto flex h-full flex-row flex-nowrap px-32">
        <router-link
          :to="{ name: 'Home' }"
          class="flex h-full items-center text-4xl font-extrabold text-gray-500"
        >
          Google
        </router-link>

        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li class="ml-9 h-full first:ml-0">
              <router-link to="/" class="flex h-full items-center py-2.5 text-gray-500"
                >Privacy

                <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" class="ml-2" />
              </router-link>
            </li>

            <li class="ml-9 h-full first:ml-0">
              <router-link to="/" class="flex h-full items-center py-2.5 text-gray-500"
                >Applicant & Candidate Privacy

                <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" class="ml-2" />
              </router-link>
            </li>

            <li class="ml-9 h-full first:ml-0">
              <router-link to="/" class="flex h-full items-center py-2.5 text-gray-500"
                >Term

                <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" class="ml-2" />
              </router-link>
            </li>
          </ul>
        </nav>

        <div class="ml-auto flex h-full items-center">
          <router-link to="/" class="py-2.5 text-gray-500">
            <font-awesome-icon :icon="['fas', 'circle-question']" class="h-5 w-5" />

            Help

            <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']"
          /></router-link>
        </div>
      </div>
    </div>
  </footer>
</template>
