<template>
  <div class="container mx-auto px-4">
    <h1 class="text-2xl font-bold mb-6 text-gray-800">الصفحة الرئيسية</h1>

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 animate-fade-in"
    >
      <!-- بطاقات الإحصائيات -->
      <div
        class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
      >
        <div class="flex items-center">
          <div class="p-3 rounded-full bg-blue-100 text-blue-600">
            <svg
              class="w-6 h-6"
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
          <div class="mr-4">
            <h3 class="text-gray-500 text-sm">إجمالي المصاعد</h3>
            <p class="text-2xl font-semibold">124</p>
          </div>
        </div>
      </div>

      <div
        class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
      >
        <div class="flex items-center">
          <div class="p-3 rounded-full bg-green-100 text-green-600">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div class="mr-4">
            <h3 class="text-gray-500 text-sm">المصاعد العاملة</h3>
            <p class="text-2xl font-semibold">118</p>
          </div>
        </div>
      </div>

      <div
        class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
      >
        <div class="flex items-center">
          <div class="p-3 rounded-full bg-yellow-100 text-yellow-600">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div class="mr-4">
            <h3 class="text-gray-500 text-sm">تحت الصيانة</h3>
            <p class="text-2xl font-semibold">4</p>
          </div>
        </div>
      </div>

      <div
        class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
      >
        <div class="flex items-center">
          <div class="p-3 rounded-full bg-red-100 text-red-600">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              ></path>
            </svg>
          </div>
          <div class="mr-4">
            <h3 class="text-gray-500 text-sm">معطلة</h3>
            <p class="text-2xl font-semibold">2</p>
          </div>
        </div>
      </div>
    </div>

    <!-- جدول المصاعد الحديثة -->
    <div
      class="bg-white rounded-lg shadow-md p-6 mb-8 animate-fade-in hidden sm:block"
    >
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold text-gray-800">
          أحدث المصاعد المضافة
        </h2>
        <button class="text-blue-600 hover:text-blue-800">عرض الكل</button>
      </div>
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th
                class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                رقم المصعد
              </th>
              <th
                class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                الموقع
              </th>
              <th
                class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                النوع
              </th>
              <th
                class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                الحالة
              </th>
              <th
                class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                آخر صيانة
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr
              v-for="(elevator, index) in recentElevators"
              :key="index"
              class="hover:bg-gray-50 transition-colors duration-150"
            >
              <td
                class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
              >
                {{ elevator.id }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ elevator.location }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ elevator.type }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span
                  :class="statusClass(elevator.status)"
                  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                >
                  {{ elevator.status }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ elevator.lastMaintenance }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recentElevators: [
        {
          id: "EL-2023-045",
          location: "برج التجاري - الطابق 12",
          type: "ركاب",
          status: "عاملة",
          lastMaintenance: "2023-05-15",
        },
        {
          id: "EL-2023-044",
          location: "مركز التسوق - الطابق 3",
          type: "خدمة",
          status: "تحت الصيانة",
          lastMaintenance: "2023-05-10",
        },
        {
          id: "EL-2023-043",
          location: "المستشفى العام - الجناح الغربي",
          type: "نقالة",
          status: "عاملة",
          lastMaintenance: "2023-05-08",
        },
        {
          id: "EL-2023-042",
          location: "الفندق الدولي - البرج الشمالي",
          type: "ركاب",
          status: "معطلة",
          lastMaintenance: "2023-04-28",
        },
        {
          id: "EL-2023-041",
          location: "المجمع السكني - المبنى أ",
          type: "خدمة",
          status: "عاملة",
          lastMaintenance: "2023-04-25",
        },
      ],
    };
  },
  methods: {
    statusClass(status) {
      return {
        "bg-green-100 text-green-800": status === "عاملة",
        "bg-yellow-100 text-yellow-800": status === "تحت الصيانة",
        "bg-red-100 text-red-800": status === "معطلة",
      };
    },
  },
};
</script>

<style>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}
</style>
