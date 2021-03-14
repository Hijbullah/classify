<template>
    <student-layout>
        <div class="py-8">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <h2 class="text-gray-900 text-2xl font-semibold border-b-2 border-gray-900">All Lecture Sheets</h2>
                <div class="w-full overflow-hidden mt-8">
                    <div class="flex flex-col">
                        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                <div class="shadow overflow-hidden">
                                    <table class="min-w-full">
                                        <tbody class="bg-white divide-y divide-gray-200">
                                            <tr v-for="lectureSheet in lectureSheets.data" :key="lectureSheet.id">
                                                <td class="px-6 py-4 whitespace-no-wrap">
                                                    <div class="flex items-center">
                                                        <h4>{{ lectureSheet.title }}</h4>
                                                    </div>
                                                </td>

                                                <td class="px-6 py-4 whitespace-no-wrap">
                                                    <p>Subject: {{ lectureSheet.subject }}</p>
                                                </td>
                                               
                                                <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                                                    <a
                                                        :href="route('students.lectureSheets.download', lectureSheet.id)" 
                                                        class="inline-flex items-center px-2 py-1 bg-gray-900 text-white text-xs uppercase tracking-widest rounded hover:bg-gray-700 focus:outline-none"
                                                    >
                                                        download
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr v-if="lectureSheets.data.length === 0">
                                                <td class="px-6 py-4" colspan="3">No lecture Sheets found.</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <pagination v-if="lectureSheets.data.length" :links="lectureSheets.links" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </student-layout>
</template>

<script>
    import StudentLayout from '@/Layouts/StudentLayout'
    import Pagination from '@/Components/Shared/Pagination'

    export default {
        components: {
            StudentLayout,
            Pagination
        },
        props: {
            lectureSheets: Object
        }
    }
</script>
