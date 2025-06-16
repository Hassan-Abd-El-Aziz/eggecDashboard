<template>
  <div class="min-h-screen bg-gray-100">
    <!-- شريط التنقل العلوي -->
    <nav class="bg-blue-600 text-white shadow-lg">
      <div
        class="container mx-auto px-4 py-3 flex justify-between items-center"
      >
        <div class="flex items-center space-x-4">
          <button
            @click="toggleSidebar"
            class="lg:hidden text-white focus:outline-none"
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
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          <h1 class="text-xl font-bold sm:font-semibold align-middle">
            شركة مصر الخليج للمصاعد والسلالم الكهربائية
          </h1>
        </div>
        <div class="flex items-center space-x-4">
          <div class="relative">
            <button
              @click="toggleNotifications"
              class="p-1 rounded-full hover:bg-blue-500 focus:outline-none"
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
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                ></path>
              </svg>
              <span
                v-if="unreadNotifications"
                class="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"
              ></span>
            </button>
            <div
              v-if="showNotifications"
              class="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-50"
            >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >إشعار جديد</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >تحديث النظام</a
              >
            </div>
          </div>
          <div class="relative">
            <button
              @click="toggleUserMenu"
              class="flex items-center space-x-2 focus:outline-none"
            >
              <img
                class="w-9 rounded-full"
                src="https://img.icons8.com/?size=100&id=83761&format=png&color=ffffff"
                alt="User"
              />
              <span class="hidden md:inline">المدير</span>
            </button>
            <div
              v-if="showUserMenu"
              class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
            >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >الملف الشخصي</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >الإعدادات</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >تسجيل الخروج</a
              >
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div class="flex">
      <!-- القائمة الجانبية -->
      <aside
        :class="{
          'hidden lg:block': !sidebarOpen,
          block: sidebarOpen,
          'translate-x-0': sidebarOpen,
          '-translate-x-full': !sidebarOpen,
        }"
        class="bg-gray-800 text-white min-w-100 sm:min-w-64 min-h-screen transition-all duration-300 ease-in-out transform lg:translate-x-0"
      >
        <div class="p-4">
          <h2 class="text-xl font-semibold">القائمة الرئيسية</h2>
        </div>
        <nav class="mt-6">
          <router-link
            to="/"
            class="flex items-center px-4 py-3 hover:bg-gray-700 transition-colors duration-200"
            :class="{ 'bg-blue-600': $route.path === '/' }"
          >
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
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              ></path>
            </svg>
            <span class="mr-3">الصفحة الرئيسية</span>
          </router-link>
          <router-link
            to="/customers"
            class="flex items-center px-4 py-3 hover:bg-gray-700 transition-colors duration-200"
            :class="{ 'bg-blue-600': $route.path === '/customers' }"
          >
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
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              ></path>
            </svg>
            <span class="mr-3">العملاء</span>
          </router-link>
          <router-link
            to="/suppliers"
            class="flex items-center px-4 py-3 hover:bg-gray-700 transition-colors duration-200"
            :class="{ 'bg-blue-600': $route.path === '/suppliers' }"
          >
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
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              ></path>
            </svg>
            <span class="mr-3">الموردون</span>
          </router-link>
          <router-link
            to="/charts"
            class="flex items-center px-4 py-3 hover:bg-gray-700 transition-colors duration-200"
            :class="{ 'bg-blue-600': $route.path === '/charts' }"
          >
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
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              ></path>
            </svg>
            <span class="mr-3">الرسومات البيانية</span>
          </router-link>
        </nav>
      </aside>
      <!-- المحتوى الرئيسي -->
      <main class="flex-1 p-6 transition-all duration-300">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidebarOpen: false,
      showNotifications: false,
      showUserMenu: false,
      unreadNotifications: true,
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    toggleNotifications() {
      this.showNotifications = !this.showNotifications;
      if (this.showNotifications) {
        this.unreadNotifications = false;
      }
    },
    toggleUserMenu() {
      this.showUserMenu = !this.showUserMenu;
    },
  },
};
</script>

<style>
/* تأثيرات الحركة */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

/* تأثيرات الاهتزاز للتنبيهات */
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
.shake {
  animation: shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}
</style>
