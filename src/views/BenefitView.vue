<template>
  <div
    class="grid grid-cols-12 justify-center items-center border-b border-solid border-brand-gray-1 bg-gray-100"
  >
    <div class="col-span-5 col-start-2 my-16">
      <h1 class="w-full text-5xl font-semibold text-start text-wrap">Benefits at works</h1>

      <h2 class="my-4 w-full text-base font-normal">
        We strive to provide Googlers and their loved ones with a world-class benefits experience,
        focused on supporting their physical, financial, and emotional wellbeing. Our benefits are
        based on data, and centered around our users: Googlers and their families. They’re
        thoughtfully designed to enhance your health and wellbeing, and generous enough to make it
        easy for you to take good care of yourself (now, and in the future). So we can build for
        everyone, together. *
      </h2>
    </div>

    <div class="col-span-4 col-start-8">
      <img
        src="https://www.gstatic.com/marketing-cms/assets/images/ca/e1/8d1e98af4cd6a943c629a1ea36c5/benefitshero.png=n-w1782-h1001"
      />
    </div>
  </div>

  <div class="mx-32">
    <collapsible-accordion header="Health and wellness"
      ><h1>
        <div class="grid grid-cols-3 justify-center items-center border-t border-gray-300">
          <div class="col-span-1 col-start-1 mx-12">
            <h2 class="text-xl flex flex-nowrap">
              <font-awesome-icon
                :icon="['fas', 'briefcase-medical']"
                class="text-blue-500 w-14 h-14 mr-5"
              />

              Keep Employees healthy is our priority.
            </h2>
          </div>

          <div class="col-span-1 col-start-2 mx-12 mt-4">
            <h2 class="text-sm flex flex-nowrap mb-3">
              <font-awesome-icon :icon="['fas', 'check']" class="text-blue-500 w5 h-5 mr-3" />

              Medical, dental, and vision insurance for employees and dependents
            </h2>

            <h2 class="text-sm flex flex-nowrap mb-3">
              <font-awesome-icon :icon="['fas', 'check']" class="text-blue-500 w5 h-5 mt-2 mr-3" />

              Employee assistance programs focused on mental health
            </h2>

            <h2 class="text-sm flex flex-nowrap mb-3">
              <font-awesome-icon :icon="['fas', 'check']" class="text-blue-500 w5 h-5 mt-2 mr-3" />

              Workplace accommodations for physical or mental health concerns
            </h2>

            <h2 class="text-sm flex flex-nowrap">
              <font-awesome-icon :icon="['fas', 'check']" class="text-blue-500 w5 h-5 mr-3" />

              Onsite wellness centers
            </h2>
          </div>

          <div class="col-span-1 col-start-3 mx-12 mt-4">
            <h2 class="text-sm flex flex-nowrap mb-3">
              <font-awesome-icon :icon="['fas', 'check']" class="text-blue-500 w5 h-5 mr-3" />

              Access to mental health apps
            </h2>

            <h2 class="text-sm flex flex-nowrap mb-3">
              <font-awesome-icon :icon="['fas', 'check']" class="text-blue-500 w5 h-5 mt-2 mr-3" />

              Second medical opinion for you and your loved ones
            </h2>

            <h2 class="text-sm flex flex-nowrap mb-3">
              <font-awesome-icon :icon="['fas', 'check']" class="text-blue-500 w5 h-5 mt-2 mr-3" />

              Medical advocacy program for transgender employees
            </h2>

            <h2 class="text-sm flex flex-nowrap mb-3 mr-3">
              <font-awesome-icon :icon="['fas', 'check']" class="text-blue-500 w5 h-5 mt-2 mr-3" />

              Support programs including menopause benefit
            </h2>
          </div>
        </div>
      </h1>
    </collapsible-accordion>

    <collapsible-accordion header="Financial wellbeing">
      <h1>
        <div class="grid grid-cols-3 justify-center items-center border-t border-gray-300">
          <div class="col-span-1 col-start-1 mx-12">
            <h2 class="text-xl flex flex-nowrap">
              <font-awesome-icon
                :icon="['fas', 'money-bills']"
                class="text-blue-500 w-14 h-14 mt-6 mr-5"
              />

              Providing compensation and programs that give our employees financial peace of mind.
            </h2>
          </div>

          <div class="col-span-1 col-start-2 mx-12 mt-4">
            <h2 class="text-sm flex flex-nowrap mb-3">
              <font-awesome-icon :icon="['fas', 'check']" class="text-blue-500 w5 h-5 mr-3" />

              Competitive compensation
            </h2>

            <h2 class="text-sm flex flex-nowrap mb-3">
              <font-awesome-icon :icon="['fas', 'check']" class="text-blue-500 w5 h-5 mt-2 mr-3" />

              Regular bonus and equity refresh opportunities
            </h2>

            <h2 class="text-sm flex flex-nowrap mb-3">
              <font-awesome-icon :icon="['fas', 'check']" class="text-blue-500 w5 h-5 mt-2 mr-3" />

              Generous 401(k) and regional retirement plans
            </h2>
          </div>

          <div class="col-span-1 col-start-3 mx-12 mt-4">
            <h2 class="text-sm flex flex-nowrap mb-3">
              <font-awesome-icon :icon="['fas', 'check']" class="text-blue-500 w5 h-5 mt-2 mr-3" />

              Annual cross-company pay equity analysis and adjustments
            </h2>

            <h2 class="text-sm flex flex-nowrap mb-3">
              <font-awesome-icon :icon="['fas', 'check']" class="text-blue-500 w5 h-5 mt-2 mr-3" />

              Annual cross-company pay equity analysis and adjustments
            </h2>

            <h2 class="text-sm flex flex-nowrap mb-3 mr-3">
              <font-awesome-icon :icon="['fas', 'check']" class="text-blue-500 w5 h-5 mr-3" />

              1-on-1 financial coaching
            </h2>
          </div>
        </div>
      </h1>
    </collapsible-accordion>

    <collapsible-accordion header="Flexibility and timeoff">
      <h1>
        <div class="grid grid-cols-3 justify-center items-center border-t border-gray-300">
          <div class="col-span-1 col-start-1 mx-12">
            <h2 class="text-lg flex flex-nowrap">
              <font-awesome-icon
                :icon="['fas', 'clock']"
                class="text-blue-500 w-14 h-14 mt-3 mr-5"
              />

              The time you need to recharge, and the flexibility to get your best work done.
            </h2>
          </div>

          <div class="col-span-1 col-start-2 mx-12 mt-4">
            <h2 class="text-sm flex flex-nowrap mb-3">
              <font-awesome-icon :icon="['fas', 'check']" class="text-blue-500 w5 h-5 mt-2 mr-3" />

              Hybrid work model with remote work opportunities also available
            </h2>

            <h2 class="text-sm flex flex-nowrap mb-3">
              <font-awesome-icon :icon="['fas', 'check']" class="text-blue-500 w5 h-5 mt-2 mr-3" />

              Hybrid work model with remote work opportunities also available
            </h2>
          </div>

          <div class="col-span-1 col-start-3 mx-12 mt-4">
            <h2 class="text-sm flex flex-nowrap mb-3">
              <font-awesome-icon :icon="['fas', 'check']" class="text-blue-500 w5 h-5 mr-3" />

              Four “work from anywhere” weeks per year
            </h2>

            <h2 class="text-sm flex flex-nowrap mb-3 mr-3">
              <font-awesome-icon :icon="['fas', 'check']" class="text-blue-500 w5 h-5 mr-3" />

              Part-time work and job-sharing options
            </h2>
          </div>
        </div>
      </h1>
    </collapsible-accordion>

    <collapsible-accordion header="Family support and care">
      <h1>
        <div class="grid grid-cols-3 justify-center items-center border-t border-gray-300">
          <div class="col-span-1 col-start-1 mx-12">
            <h2 class="text-lg flex flex-nowrap">
              <font-awesome-icon
                :icon="['fas', 'hand-holding-hand']"
                class="text-blue-500 w-14 h-14 mr-5"
              />

              How we support your loved ones.
            </h2>
          </div>

          <div class="col-span-1 col-start-2 mx-12 mt-4">
            <h2 class="text-sm flex flex-nowrap mb-3">
              <font-awesome-icon :icon="['fas', 'check']" class="text-blue-500 w5 h-5 mr-3" />

              Fertility and growing family support
            </h2>

            <h2 class="text-sm flex flex-nowrap mb-3">
              <font-awesome-icon :icon="['fas', 'check']" class="text-blue-500 w5 h-5 mr-3" />

              Parental leave and baby bonding leave
            </h2>

            <h2 class="text-sm flex flex-nowrap mb-3">
              <font-awesome-icon :icon="['fas', 'check']" class="text-blue-500 w5 h-5 mr-3" />

              Caregiver leave
            </h2>

            <h2 class="text-sm flex flex-nowrap mb-3">
              <font-awesome-icon :icon="['fas', 'check']" class="text-blue-500 w5 h-5 mr-3" />

              Elder care and support
            </h2>
          </div>

          <div class="col-span-1 col-start-3 mx-12 mt-4">
            <h2 class="text-sm flex flex-nowrap mb-3">
              <font-awesome-icon :icon="['fas', 'check']" class="text-blue-500 w5 h-5 mr-3" />

              Backup childcare
            </h2>

            <h2 class="text-sm flex flex-nowrap mb-3 mr-3">
              <font-awesome-icon :icon="['fas', 'check']" class="text-blue-500 w5 h-5 mr-3" />

              Survivor income benefit
            </h2>
          </div>
        </div>
      </h1>
    </collapsible-accordion>

    <collapsible-accordion header="Community and personal development">
      <h1>
        <div class="grid grid-cols-3 justify-center items-center border-t border-gray-300">
          <div class="col-span-1 col-start-1 mx-12">
            <h2 class="text-lg flex flex-nowrap">
              <font-awesome-icon
                :icon="['fas', 'seedling']"
                class="text-blue-500 w-14 h-14 mt-6 mr-5"
              />

              Providing room and opportunities to grow — on your own and with your teammates.
            </h2>
          </div>

          <div class="col-span-1 col-start-2 mx-12 mt-4">
            <h2 class="text-sm flex flex-nowrap mb-3">
              <font-awesome-icon :icon="['fas', 'check']" class="text-blue-500 w5 h-5 mr-3" />

              Educational reimbursement
            </h2>

            <h2 class="text-sm flex flex-nowrap mb-3">
              <font-awesome-icon :icon="['fas', 'check']" class="text-blue-500 w5 h-5 mt-3 mr-3" />

              Googler-to-Googler peer learning and coaching platform
            </h2>

            <h2 class="text-sm flex flex-nowrap mb-3">
              <font-awesome-icon :icon="['fas', 'check']" class="text-blue-500 w5 h-5 mt-3 mr-3" />

              Googler-to-Googler peer learning and coaching platform
            </h2>
          </div>

          <div class="col-span-1 col-start-3 mx-12 mt-4">
            <h2 class="text-sm flex flex-nowrap mb-3">
              <font-awesome-icon :icon="['fas', 'check']" class="text-blue-500 w5 h-5 mr-3" />

              Employee resource groups
            </h2>

            <h2 class="text-sm flex flex-nowrap mb-3 mr-3">
              <font-awesome-icon :icon="['fas', 'check']" class="text-blue-500 w5 h-5 mt-3 mr-3" />

              Internal Googler community groups and local culture clubs
            </h2>
          </div>
        </div>
      </h1>
    </collapsible-accordion>
  </div>
</template>

<script setup lang="ts">
import CollapsibleAccordion from '@/components/Shared/CollapsibleAccordion.vue'
</script>
