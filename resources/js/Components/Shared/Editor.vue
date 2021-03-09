<template>
    <div class="editor-wrapper">
        <vue-editor 
            v-model="editorContent"
            useCustomImageHandler
            @image-added="handleImageAdded"
        ></vue-editor>
    </div>
</template>

<script>
    import { VueEditor } from 'vue2-editor';

    export default {
        components: {
            VueEditor
        },
        props: {
            content: String
        },
        computed: {
            editorContent: {
                get() { return this.content},
                set(updatedContent) { this.$emit('update:content', updatedContent) }
            },
        },
        methods: {
            handleImageAdded(file, Editor, cursorLocation) {
                const CLIENT_ID = '993793b1d8d3e2e'
                var formData = new FormData();
                formData.append('image', file);
                axios({
                    url: 'https://api.imgur.com/3/image',
                    method: 'POST',
                    headers:{
                    'Authorization': 'Client-ID ' + CLIENT_ID
                    },
                    data: formData
                })
                .then((result) => {
                    console.log(result);
                    let url = result.data.data.link
                    Editor.insertEmbed(cursorLocation, 'image', url);
                })
                .catch((err) => {
                    console.log(err);
                })
            }
        }
    };
</script>
