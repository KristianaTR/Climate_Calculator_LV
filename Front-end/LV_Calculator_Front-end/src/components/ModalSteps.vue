<script setup>
   import ButtonCloseModal from "./ButtonCloseModal.vue";
   import ButtonScroll from "./ButtonScroll.vue";
</script>

<template>
    <div class="modal-mask steps">
        <div class="modal-wrapper-steps">
            <div class="modal-block-steps">
                <ButtonCloseModal @closeModal="$emit('closeModal')"></ButtonCloseModal>
                <h3>Ambīciju līmeņi</h3>
                <div class="content-container steps">
                    <div class="content-blocks">
                        <div class="content-block">
                            <div class="content-block__text-container">
                                <h2>Ambīciju līmeņi</h2>
                                <p>Ambīciju līmeņi katrā no sektoriem ir atšķirīgi un pielāgoti attiecīgajai nozarei, bet visi seko līdzīgiem pieņēmumiem:</p>
                                <img class="img-mobile" src="../assets/images/example_steps_mobile.png" alt="example steps mobile">
                                <ol>
                                    <li>līmenis - lielas pārmaiņas attiecīgajā sektorā netiek plānotas līdz 2050.gadam;</li>
                                    <li>līmenis - dažas “minimālas piepūles” izmaiņas tiek veiktas līdz 2050.gadam (atkarīgas no katra sektora izvirzītajiem mērķiem un iespējām);</li>
                                    <li>līmenis - tiek veiktas izmaiņas, kas ir stipri ambiciozākas, bet uzskatāmas par iespējamām;</li>
                                    <li>līmenis - iespaidīgas izmaiņas, kas nav viegli sasniedzamas vai pat vēlamas. Šīs ir ekspertu ieskatā ļoti grūti realizējamas izmaiņas no tehnoloģiskā viedoļa.</li>
                                </ol>
                                <p class="text-desktop">Pie katra no amīciju līmeņiem ir iespējams iepazīties ar īsu tā aprakstu (novietojot kursoru uz izvēlētā ambīciju līmeņa, vai mobilajā versijā uzklikšķinot uz izvēlētā ambīciju līmeņa), kā arī atsevišķiem apakšsektotiem ir pieejami garāki apraksti (pdf dokumenti) ar izvērstāku skaidrojumu par attiecīgo nozari.</p>
                                <p class="text-desktop">Balstoties uz jūsu izvēlēto ambīciju līmeni, ko izvēlaties katrai nozarei, kalkulatora modelis aprēķina enerģijas un materiālu patēriņu, siltumnīcefekta gāzu emisijas un no tā izrietošo ietekmi uz sabiedrību, vidi un zemes izmantošanu, kas tiek reprezentēta oglekļa emisijas ekvivalentos (CO2ekv).</p>
                            </div>
                            <div class="content-block__img-container">
                               <img class="img-tablet" src="../assets/images/example_steps_tablet.png" alt="example steps tablet">
                            </div>
                        </div>
                        <div class="content-block">
                            <div class="content-block__text-container">
                                <p>Pie katra no amīciju līmeņiem ir iespējams iepazīties ar īsu tā aprakstu (novietojot kursoru uz izvēlētā ambīciju līmeņa, vai mobilajā versijā uzklikšķinot uz izvēlētā ambīciju līmeņa), kā arī atsevišķiem apakšsektotiem ir pieejami garāki apraksti (pdf dokumenti) ar izvērstāku skaidrojumu par attiecīgo nozari.</p>
                                <p>Balstoties uz jūsu izvēlēto ambīciju līmeni, ko izvēlaties katrai nozarei, kalkulatora modelis aprēķina enerģijas un materiālu patēriņu, siltumnīcefekta gāzu emisijas un no tā izrietošo ietekmi uz sabiedrību, vidi un zemes izmantošanu, kas tiek reprezentēta oglekļa emisijas ekvivalentos (CO2ekv).</p>
                            </div>
                            <div class="content-block__text-container">
                                <ol>
                                    <li>Ambīciju līmeņa neliels apraksts.</li>
                                    <li>Sektoru ambīciju izvēlne.</li>
                                    <li>Apakšsektoru ambīciju izvēlne.</li>
                                </ol>
                            </div>
                        </div>
                    </div>

                </div>
                <ButtonScroll></ButtonScroll>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModalSteps',
    components: {
            ButtonCloseModal,
            ButtonScroll
        }
}
</script>