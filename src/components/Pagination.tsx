export const Pagination = () => {
  return (
    <div class="flex justify-center space-x-1 py-4 text-gray-200 fill-gray-200">
      <button type="button" class="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md">
        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button class="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded">
        1
      </button>
      <button type="button" class="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md">
        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
}