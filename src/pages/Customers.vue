<template>
  <div class="container mx-auto px-4 animate-fade-in grid grid-cols-1">
    <h1 class="text-2xl font-bold mb-6 text-gray-800">إدارة العملاء</h1>

    <div class="bg-white rounded-lg shadow-md p-6 mb-8">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold text-gray-800">قائمة العملاء</h2>
        <button
          class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-300 flex items-center"
        >
          <svg
            class="w-4 h-4 mr-2"
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
          إضافة عميل جديد
        </button>
      </div>

      <div class="mb-4 flex justify-between items-center">
        <div class="relative w-64">
          <input
            type="text"
            placeholder="بحث..."
            class="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <svg
            class="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>

        <div class="flex space-x-2">
          <button
            class="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors duration-300"
          >
            <svg
              class="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              ></path>
            </svg>
          </button>
          <button
            class="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors duration-300"
          >
            <svg
              class="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th
                class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                الاسم
              </th>
              <th
                class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                البريد الإلكتروني
              </th>
              <th
                class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                الهاتف
              </th>
              <th
                class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                عدد المصاعد
              </th>
              <th
                class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                آخر زيارة
              </th>
              <th
                class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                الإجراءات
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr
              v-for="(customer, index) in customers"
              :key="index"
              class="hover:bg-gray-50 transition-colors duration-150"
            >
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img
                      class="h-10 w-10 rounded-full"
                      :src="customer.avatar"
                      alt=""
                    />
                  </div>
                  <div class="mr-4">
                    <div class="text-sm font-medium text-gray-900">
                      {{ customer.name }}
                    </div>
                    <div class="text-sm text-gray-500">
                      {{ customer.company }}
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ customer.email }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ customer.phone }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ customer.elevators }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ customer.lastVisit }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button class="text-blue-600 hover:text-blue-900 mr-3">
                  تعديل
                </button>
                <button class="text-red-600 hover:text-red-900">حذف</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="mt-4 flex justify-between items-center">
        <div class="text-sm text-gray-500 hidden sm:block">
          عرض <span class="font-normal">1</span> إلى
          <span class="font-medium">5</span> من
          <span class="font-medium">24</span> عملاء
        </div>
        <div class="flex space-x-1">
          <button
            class="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors duration-300"
          >
            السابق
          </button>
          <button
            class="px-3 py-1 border border-blue-500 bg-blue-500 text-white rounded-md"
          >
            1
          </button>
          <button
            class="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors duration-300"
          >
            2
          </button>
          <button
            class="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors duration-300"
          >
            3
          </button>
          <button
            class="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors duration-300"
          >
            التالي
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      customers: [
        {
          name: "أحمد محمد",
          company: "شركة التقنية المحدودة",
          email: "ahmed@tech.com",
          phone: "0555123456",
          elevators: 8,
          lastVisit: "2023-05-18",
          avatar: "https://via.placeholder.com/40",
        },
        {
          name: "سارة عبدالله",
          company: "المجموعة العقارية",
          email: "sara@realestate.com",
          phone: "0500987654",
          elevators: 12,
          lastVisit: "2023-05-15",
          avatar: "https://via.placeholder.com/40",
        },
        {
          name: "خالد سالم",
          company: "فندق الشرق",
          email: "khaled@hotel.com",
          phone: "0566778899",
          elevators: 5,
          lastVisit: "2023-05-10",
          avatar: "https://via.placeholder.com/40",
        },
        {
          name: "نورة علي",
          company: "مستشفى المدينة",
          email: "nora@hospital.com",
          phone: "0544332211",
          elevators: 3,
          lastVisit: "2023-05-05",
          avatar: "https://via.placeholder.com/40",
        },
        {
          name: "فيصل عبدالرحمن",
          company: "مركز التسوق الكبير",
          email: "faisal@mall.com",
          phone: "0588990011",
          elevators: 15,
          lastVisit: "2023-04-28",
          avatar: "https://via.placeholder.com/40",
        },
      ],
    };
  },
};
</script>
