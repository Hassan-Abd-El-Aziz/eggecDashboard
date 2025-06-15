<template>
  <div class="container mx-auto px-4">
    <h1 class="text-2xl font-bold mb-6 text-gray-800">إدارة الموردين</h1>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div
        class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
      >
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-lg font-semibold text-gray-800">إحصاءات الموردين</h2>
          <div class="p-2 rounded-full bg-blue-100 text-blue-600">
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              ></path>
            </svg>
          </div>
        </div>
        <div class="space-y-3">
          <div class="flex justify-between">
            <span class="text-gray-600">إجمالي الموردين</span>
            <span class="font-semibold">18</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-600">موردون نشطون</span>
            <span class="font-semibold">15</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-600">موردون موقوفون</span>
            <span class="font-semibold">3</span>
          </div>
        </div>
      </div>

      <div
        class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
      >
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-lg font-semibold text-gray-800">
            أعلى الموردين تقييماً
          </h2>
          <div class="p-2 rounded-full bg-green-100 text-green-600">
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              ></path>
            </svg>
          </div>
        </div>
        <div class="space-y-3">
          <div
            v-for="(supplier, index) in topSuppliers"
            :key="index"
            class="flex items-center justify-between"
          >
            <div class="flex items-center">
              <img
                class="w-8 h-8 rounded-full mr-3"
                :src="supplier.avatar"
                alt=""
              />
              <span>{{ supplier.name }}</span>
            </div>
            <div class="flex items-center">
              <svg
                class="w-4 h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
              <span class="ml-1">{{ supplier.rating }}</span>
            </div>
          </div>
        </div>
      </div>

      <div
        class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
      >
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-lg font-semibold text-gray-800">إضافة مورد جديد</h2>
          <div class="p-2 rounded-full bg-purple-100 text-purple-600">
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
          </div>
        </div>
        <form class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1"
              >اسم المورد</label
            >
            <input
              type="text"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div><</div>
        </form>
      </div>
    </div>
  </div>
</template>
