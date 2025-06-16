<template>
  <div class="container mx-auto px-4 py-6 animate-fade-in">
    <h1 class="text-2xl font-bold mb-6 text-gray-800">
      الرسومات البيانية والإحصاءات
    </h1>

    <!-- فلتر البيانات -->
    <div class="bg-white rounded-lg shadow-md p-4 mb-6 animate-fade-in">
      <div
        class="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0"
      >
        <div>
          <h2 class="text-lg font-semibold text-gray-700">تصفية البيانات</h2>
          <p class="text-sm text-gray-500">اختر الفترة الزمنية لعرض البيانات</p>
        </div>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="period in timePeriods"
            :key="period.value"
            @click="selectedPeriod = period.value"
            :class="{
              'bg-blue-600 text-white': selectedPeriod === period.value,
              'bg-gray-100 text-gray-700': selectedPeriod !== period.value,
            }"
            class="px-4 py-2 rounded-md transition-all duration-300 hover:shadow-md"
          >
            {{ period.label }}
          </button>
        </div>
      </div>
    </div>

    <!-- شبكة الرسومات البيانية -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <!-- رسمة بيانية 1: حالة المصاعد -->
      <div
        class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
      >
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-semibold text-gray-800">حالة المصاعد</h2>
          <div class="p-2 rounded-full bg-blue-100 text-blue-600 animate-pulse">
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
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              ></path>
            </svg>
          </div>
        </div>
        <div class="h-64">
          <canvas ref="elevatorStatusChart"></canvas>
        </div>
        <div class="mt-4 flex flex-wrap justify-center gap-4">
          <div
            v-for="(status, index) in elevatorStatusData"
            :key="index"
            class="flex items-center"
          >
            <span
              class="w-3 h-3 rounded-full mr-2"
              :class="statusColors[index]"
            ></span>
            <span class="text-sm text-gray-600"
              >{{ status.label }}: {{ status.value }} ({{
                status.percentage
              }}%)</span
            >
          </div>
        </div>
      </div>

      <!-- رسمة بيانية 2: صيانة المصاعد -->
      <div
        class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
      >
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-semibold text-gray-800">
            صيانة المصاعد الشهرية
          </h2>
          <div
            class="p-2 rounded-full bg-green-100 text-green-600 animate-bounce"
          >
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
        </div>
        <div class="h-64">
          <canvas ref="maintenanceChart"></canvas>
        </div>
      </div>
    </div>

    <!-- رسمة بيانية 3: توزيع المصاعد حسب النوع -->
    <div
      class="bg-white rounded-lg shadow-md p-6 mb-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
    >
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold text-gray-800">
          توزيع المصاعد حسب النوع
        </h2>
        <div
          class="p-2 rounded-full bg-purple-100 text-purple-600 rotate-0 hover:rotate-180 transition-transform duration-500"
        >
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
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            ></path>
          </svg>
        </div>
      </div>
      <div class="h-96">
        <canvas ref="elevatorTypeChart"></canvas>
      </div>
    </div>

    <!-- رسمة بيانية 4: أعطال المصاعد -->
    <div
      class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
    >
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold text-gray-800">
          أعطال المصاعد خلال السنة
        </h2>
        <div class="p-2 rounded-full bg-red-100 text-red-600 animate-ping">
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
      </div>
      <div class="h-96">
        <canvas ref="breakdownsChart"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  data() {
    return {
      selectedPeriod: "year",
      timePeriods: [
        { label: "أسبوع", value: "week" },
        { label: "شهر", value: "month" },
        { label: "ربع سنة", value: "quarter" },
        { label: "سنة", value: "year" },
        { label: "كل الفترات", value: "all" },
      ],
      elevatorStatusData: [
        { label: "عاملة", value: 118, percentage: 85 },
        { label: "تحت الصيانة", value: 4, percentage: 3 },
        { label: "معطلة", value: 2, percentage: 2 },
        { label: "قيد التركيب", value: 12, percentage: 10 },
      ],
      statusColors: [
        "bg-green-500",
        "bg-yellow-500",
        "bg-red-500",
        "bg-blue-500",
      ],
      elevatorStatusChart: null,
      maintenanceChart: null,
      elevatorTypeChart: null,
      breakdownsChart: null,
    };
  },
  mounted() {
    this.renderCharts();
  },
  methods: {
    renderCharts() {
      // رسمة حالة المصاعد (دائري)
      this.elevatorStatusChart = new Chart(this.$refs.elevatorStatusChart, {
        type: "doughnut",
        data: {
          labels: this.elevatorStatusData.map((item) => item.label),
          datasets: [
            {
              data: this.elevatorStatusData.map((item) => item.value),
              backgroundColor: [
                "rgba(16, 185, 129, 0.8)",
                "rgba(245, 158, 11, 0.8)",
                "rgba(239, 68, 68, 0.8)",
                "rgba(59, 130, 246, 0.8)",
              ],
              borderColor: [
                "rgba(16, 185, 129, 1)",
                "rgba(245, 158, 11, 1)",
                "rgba(239, 68, 68, 1)",
                "rgba(59, 130, 246, 1)",
              ],
              borderWidth: 1,
              hoverOffset: 20,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "bottom",
              rtl: true,
              labels: {
                usePointStyle: true,
                padding: 20,
                font: {
                  family: "Tajawal, sans-serif",
                },
              },
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  return `${context.label}: ${context.raw} (${context.parsed}%)`;
                },
              },
            },
          },
          cutout: "70%",
          animation: {
            animateScale: true,
            animateRotate: true,
          },
        },
      });

      // رسمة الصيانة الشهرية (أعمدة)
      this.maintenanceChart = new Chart(this.$refs.maintenanceChart, {
        type: "bar",
        data: {
          labels: [
            "يناير",
            "فبراير",
            "مارس",
            "أبريل",
            "مايو",
            "يونيو",
            "يوليو",
            "أغسطس",
            "سبتمبر",
            "أكتوبر",
            "نوفمبر",
            "ديسمبر",
          ],
          datasets: [
            {
              label: "صيانة وقائية",
              data: [12, 15, 8, 10, 14, 18, 20, 15, 12, 10, 8, 5],
              backgroundColor: "rgba(59, 130, 246, 0.7)",
              borderColor: "rgba(59, 130, 246, 1)",
              borderWidth: 1,
              borderRadius: 6,
            },
            {
              label: "صيانة طارئة",
              data: [3, 5, 2, 4, 6, 8, 5, 4, 3, 2, 1, 2],
              backgroundColor: "rgba(239, 68, 68, 0.7)",
              borderColor: "rgba(239, 68, 68, 1)",
              borderWidth: 1,
              borderRadius: 6,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              beginAtZero: true,
              grid: {
                color: "rgba(0, 0, 0, 0.05)",
              },
            },
          },
          plugins: {
            legend: {
              position: "top",
              rtl: true,
              labels: {
                usePointStyle: true,
                padding: 20,
                font: {
                  family: "Tajawal, sans-serif",
                },
              },
            },
            tooltip: {
              mode: "index",
              intersect: false,
            },
          },
          animation: {
            delay: (context) => {
              if (context.type === "data" && context.mode === "default") {
                return context.dataIndex * 50;
              }
            },
          },
        },
      });

      // رسمة توزيع المصاعد حسب النوع (رادار)
      this.elevatorTypeChart = new Chart(this.$refs.elevatorTypeChart, {
        type: "radar",
        data: {
          labels: ["ركاب", "خدمة", "نقالة", "بضائع", "سيارات", "خاص"],
          datasets: [
            {
              label: "عدد المصاعد",
              data: [65, 28, 12, 15, 8, 5],
              backgroundColor: "rgba(139, 92, 246, 0.2)",
              borderColor: "rgba(139, 92, 246, 1)",
              borderWidth: 2,
              pointBackgroundColor: "rgba(139, 92, 246, 1)",
              pointBorderColor: "#fff",
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgba(139, 92, 246, 1)",
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            r: {
              angleLines: {
                display: true,
                color: "rgba(0, 0, 0, 0.1)",
              },
              suggestedMin: 0,
              suggestedMax: 70,
              ticks: {
                stepSize: 10,
              },
            },
          },
          plugins: {
            legend: {
              position: "top",
              rtl: true,
              labels: {
                font: {
                  family: "Tajawal, sans-serif",
                },
              },
            },
          },
          animation: {
            duration: 2000,
            easing: "easeOutQuart",
          },
          elements: {
            line: {
              tension: 0.1,
            },
          },
        },
      });

      // رسمة أعطال المصاعد (خطي)
      this.breakdownsChart = new Chart(this.$refs.breakdownsChart, {
        type: "line",
        data: {
          labels: [
            "يناير",
            "فبراير",
            "مارس",
            "أبريل",
            "مايو",
            "يونيو",
            "يوليو",
            "أغسطس",
            "سبتمبر",
            "أكتوبر",
            "نوفمبر",
            "ديسمبر",
          ],
          datasets: [
            {
              label: "أعطال المصاعد",
              data: [5, 7, 4, 6, 8, 10, 12, 9, 7, 5, 4, 3],
              fill: true,
              backgroundColor: "rgba(239, 68, 68, 0.1)",
              borderColor: "rgba(239, 68, 68, 1)",
              borderWidth: 2,
              tension: 0.3,
              pointBackgroundColor: "rgba(239, 68, 68, 1)",
              pointBorderColor: "#fff",
              pointRadius: 5,
              pointHoverRadius: 7,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                color: "rgba(0, 0, 0, 0.05)",
              },
            },
            x: {
              grid: {
                display: false,
              },
            },
          },
          plugins: {
            legend: {
              position: "top",
              rtl: true,
              labels: {
                font: {
                  family: "Tajawal, sans-serif",
                },
              },
            },
            tooltip: {
              mode: "index",
              intersect: false,
            },
          },
          animation: {
            duration: 1500,
            easing: "easeInOutQuad",
          },
        },
      });
    },
  },
  beforeUnmount() {
    if (this.elevatorStatusChart) this.elevatorStatusChart.destroy();
    if (this.maintenanceChart) this.maintenanceChart.destroy();
    if (this.elevatorTypeChart) this.elevatorTypeChart.destroy();
    if (this.breakdownsChart) this.breakdownsChart.destroy();
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

/* تخصيص الخط للغة العربية */
/* @import url("https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap");
body {
  font-family: "Tajawal", sans-serif;
} */
</style>
