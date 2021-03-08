<template>
    <div class="h-screen w-full flex flex-col">
        <div class="h-8 w-full flex justify-between items-center px-4 bg-green-500">
            <h4 class="text-white text-lg font-bold tracking-wider">Lv Class-Live</h4>
            <div class="flex space-x-3">
                <button @click.prevent="cancelClass" v-if="showCancelButton && mode == 'start'" class="inline-flex text-white focus:outline-none">
                    Cancel
                </button>

                <button @click.prevent="hangUp" v-if="showHangupButton" class="inline-flex text-white">
                    Hangup
                </button>
                
                <button @click.prevent="endMeeting" v-if="showEndClassButton && mode == 'start'" class="inline-flex text-white">
                    End Class
                </button>
            </div>
        </div>
        <div class="flex-1">
            <live-meet ref="liveMeeting" domain="meet.jit.si" :options="options"/>
        </div>
    </div>
</template>

<script>
    import LiveMeet from './LiveMeet'

    export default {
        components: {
            LiveMeet
        },
        props: {
            classId: String,
            subject: String,
            meetingId: String,
            userInfo: Object,
            mode: String,
            backRoute: String,
        },
        data() {
            return {
                showCancelButton: true,
                showEndClassButton: false,
                showHangupButton: false
            }
        },
        computed: {
            options () {
                return {
                    roomName: this.meetingId,
                    noSSL: false,
                    userInfo: {
                        email: this.userInfo.email,
                        displayName: this.userInfo.name,
                    },
                    configOverwrite: {
                        // prejoinPageEnabled: false,
                    },
                    interfaceConfigOverwrite: {
                        SHOW_JITSI_WATERMARK: false,
                        JITSI_WATERMARK_LINK: 'https://hijbu.com',
                        SHOW_WATERMARK_FOR_GUESTS: false,
                        SHOW_CHROME_EXTENSION_BANNER: false,
                        SETTINGS_SECTIONS: [ 'devices', 'language', 'moderator', 'profile' ],
                        TOOLBAR_BUTTONS: [
                            'microphone', 'camera', 'closedcaptions', 'desktop', 'fullscreen',
                            'fodeviceselection', 'profile', 'chat', 'recording',
                            'livestreaming', 'etherpad', 'settings', 'raisehand',
                            'videoquality', 'filmstrip', 'stats',
                            'tileview', 'download', 'mute-everyone', 'security'
                        ],
                    },
                    onload: this.onIFrameLoad
                };
            },
        },
        methods: {
            onIFrameLoad () {
                this.$refs.liveMeeting.addEventListener('videoConferenceJoined', this.onVideoConferenceJoined);
                this.$refs.liveMeeting.addEventListener('participantJoined', this.OnParticipantJoined);

                
            },
            onVideoConferenceJoined (e) {
                axios.post(route('class.live.update', this.classId), {
                            meeting_id: this.meetingId
                        })
                        .then(response => {
                            this.showCancelButton = false;
                            this.showEndClassButton = true;
                        });
               
            },

            OnParticipantJoined(e) {
                if(this.mode == 'join') {
                    this.showHangupButton  = true;
                }
            },

            onReadyToClose() {
                console.log('closed');
                // if(this.mode == 'start') {
                //     
                // }else {
                //     this.$inertia.visit(route(this.backRoute));
                // }
            },

            cancelClass() {
                if(confirm('Your are about to cancel the class. Are you sure?')) {
                    this.$inertia.visit(route(this.backRoute));
                }
            },

            endMeeting() {
                if(confirm('Your are about to End the class. Are you sure?')) {
                    axios.post(route('class.live.end', this.classId))
                        .then(response => {
                            this.$refs.liveMeeting.executeCommand('hangup');
                            this.$inertia.visit(route(this.backRoute));
                        });
                }
            },

            hangUp() {
                this.$refs.liveMeeting.executeCommand('hangup');
                this.$inertia.visit(route(this.backRoute));
            }
        },
    }
</script>