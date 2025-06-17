<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 p-4"
  >
    <!-- الرسوم المتحركة -->
    <div class="relative w-64 h-64 mb-8">
      <!-- المصعد -->
      <div
        class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-40 bg-gray-300 rounded-t-lg border-2 border-gray-400"
      >
        <div
          class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-4 bg-gray-400 rounded-full"
        ></div>
        <div
          class="absolute top-4 left-2 w-20 h-32 bg-gray-200 rounded-t-sm flex justify-center items-center"
        >
          <div
            class="w-16 h-24 bg-gray-300 rounded-sm flex flex-col items-center p-1"
          >
            <div class="w-full h-4 bg-red-500 mb-1 rounded-sm"></div>
            <div class="w-full h-4 bg-blue-500 mb-1 rounded-sm"></div>
            <div class="w-full h-4 bg-yellow-500 mb-1 rounded-sm"></div>
          </div>
        </div>
      </div>

      <!-- الحبال -->
      <div
        class="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-64 bg-gray-400"
      ></div>

      <!-- تأثير السقوط -->
      <div
        class="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-8 bg-red-500 animate-bounce"
      ></div>
    </div>

    <!-- المحتوى الرئيسي -->
    <div class="text-center max-w-md mx-auto">
      <h1 class="text-6xl font-bold text-gray-800 mb-4 animate-pulse">404</h1>
      <h2 class="text-3xl font-semibold text-gray-700 mb-4">
        الصفحة غير موجودة!
      </h2>
      <p class="text-lg text-gray-600 mb-8">
        يبدو أن المصعد قد توقف في طابق غير موجود. ربما تريد العودة إلى الطابق
        الرئيسي؟
      </p>

      <!-- زر العودة -->
      <router-link
        to="/"
        class="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
      >
        <svg
          class="w-5 h-5 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          ></path>
        </svg>
        العودة إلى الصفحة الرئيسية
      </router-link>
    </div>

    <!-- رسوم متحركة إضافية -->
    <div class="mt-12 flex space-x-4">
      <div
        v-for="i in 5"
        :key="i"
        class="w-3 h-3 bg-gray-400 rounded-full opacity-0 animate-fall"
        :style="`animation-delay: ${i * 0.2}s`"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style>
@keyframes fall {
  0% {
    transform: translateY(-100px);
    opacity: 1;
  }
  100% {
    transform: translateY(100px);
    opacity: 0;
  }
}

.animate-fall {
  animation: fall 1.5s ease-in infinite;
}

/* تأثير اهتزاز المصعد */
@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }
  20%,
  60% {
    transform: translateX(-5px);
  }
  40%,
  80% {
    transform: translateX(5px);
  }
}

.animate-shake {
  animation: shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite;
}
</style>
