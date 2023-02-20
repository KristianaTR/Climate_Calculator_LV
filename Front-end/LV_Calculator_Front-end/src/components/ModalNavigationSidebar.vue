<script setup>
    import ButtonCloseModal from "./ButtonCloseModal.vue";
    import ModalHowToUseTablet from './ModalHowToUseTablet.vue';
    import ModalAboutTablet from './ModalAboutTablet.vue';
    import ModalSummaryMobile from "./ModalSummaryMobile.vue";
    import ModalCalcStructureMobile from "./ModalCalcStructureMobile.vue";
    import ModalScenariousMobile from "./ModalScenariousMobile.vue";
    import ModalAboutProjectMobile from "./ModalAboutProjectMobile.vue";
    import ModalProjectPurposeMobile from "./ModalProjectPurposeMobile.vue";
</script>

<template>
    <div class="modal-mask nav-sidebar">
        <div class="modal-wrapper">
            <div class="modal-block">
                <div class="container__heading">
                    <ButtonCloseModal  @closeModal="$emit('closeModal')"></ButtonCloseModal>
                </div>
                <div class="container__tab-tablet">
                    <div class="tab-block">
                        <span @click="showModalHowToUseTablet = true" >Kā lietot Kalkulatoru?</span>
                        <ModalHowToUseTablet v-show="showModalHowToUseTablet" @closeModal="showModalHowToUseTablet = false"></ModalHowToUseTablet>
                        
                        <span @click="showModalAboutTablet = true" >Par projektu</span>
                        <ModalAboutTablet v-show="showModalAboutTablet" @closeModal="showModalAboutTablet = false"></ModalAboutTablet>
                    </div>
                </div>
                <div class="container__tab-mobile">
                    <div class="tab-block">
                        <h2 class="tab-heading">Kā lietot kalkulatoru?</h2>

                        <span @click="showModalSummaryMobile = true" >Kopsavilkums</span>
                        <ModalSummaryMobile v-show="showModalSummaryMobile" @closeModal="showModalSummaryMobile = false"></ModalSummaryMobile>
                        
                        <span @click="showModalCalcStructureMobile = true" >Kalkulatora uzbūve</span>
                        <ModalCalcStructureMobile v-show="showModalCalcStructureMobile" @closeModal="showModalCalcStructureMobile = false"></ModalCalcStructureMobile>
                        
                        <span @click="showModalScenariousMobile = true" >Sava scenārija izveide</span>
                        <ModalScenariousMobile v-show="showModalScenariousMobile" @closeModal="showModalScenariousMobile = false"></ModalScenariousMobile>
                    </div>
                    <div class="tab-block">
                        <h2 class="tab-heading">Par projektu</h2>

                        <span @click="showModalAboutProjectMobile = true" >Projekts</span>
                        <ModalAboutProjectMobile v-show="showModalAboutProjectMobile" @closeModal="showModalAboutProjectMobile = false"></ModalAboutProjectMobile>

                        <span @click="showModalProjectPurposeMobile = true" >Projekta mērķi</span>
                        <ModalProjectPurposeMobile v-show="showModalProjectPurposeMobile" @closeModal="showModalProjectPurposeMobile = false"></ModalProjectPurposeMobile>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModalNavigationSidebar',
    components: {
        ButtonCloseModal,
        ModalHowToUseTablet,
        ModalAboutTablet,
        ModalSummaryMobile,
        ModalCalcStructureMobile,
        ModalScenariousMobile,
        ModalAboutProjectMobile,
        ModalProjectPurposeMobile
    },
    data () {
        return {
            showModalSummaryMobile: false,
            showModalHowToUseTablet: false,
            showModalAboutTablet: false,
            showModalCalcStructureMobile: false,
            showModalScenariousMobile: false,
            showModalAboutProjectMobile: false,
            showModalProjectPurposeMobile: false,
        }
    },
    methods: {
        openModalSummaryMobile () {
            this.showModalSummaryMobile = true;
        },
        openModalHowToUseTablet() {
            this.showModalHowToUseTablet = true;
        },
        openModalAboutTablet() {
            this.showModalAboutTablet = true;
        },
        openModalCalcStructureMobile () {
            this.showModalCalcStructureMobile = true;
        },
        openModalScenariousMobile () {
            this.showModalScenariousMobile = true;
        },
        openModalAboutProjectMobile () {
            this.showModalAboutProjectMobile = true;
        },
        openModalProjectPurposeMobile () {
            this.showModalProjectPurposeMobile = true;
        }
    }
}
</script>