<script setup>
   import ButtonCloseModal from "./ButtonCloseModal.vue";
   import ButtonScroll from "./ButtonScroll.vue";
</script>

<template>
    <div class="modal-mask sections">
        <div class="modal-wrapper-sections">
            <div class="modal-block-sections">
                <ButtonCloseModal @closeModal="$emit('closeModal')"></ButtonCloseModal>
                <h3>Sektori</h3>
                <div class="content-container sections">
                    <div class="content-blocks">
                        <div class="content-block">
                            <div class="content-block__text-container">
                                <h2>Sektori</h2>
                                <p>Klimata kalkulators 2050 darbojas, sadalot valsts enerģētikas un emisiju sistēmu vairākos sektoros (nozarēs), modelējot enerģijas pieprasījumu, piedāvājumu un emisijas katrā no tiem 50 gadu periodā un pēc tam tos visas apvienojot kopā, parāda kopējos rādītājus (enerģijas ieguvi, patēriņu un Co2 emisijas desmit gadu griezumā līdz 2060. gadam).</p>
                                <p><b>Valsts energosistēma ir sadalīta sekojošos sektoros:</b></p>
                                <img class="img-mobile" src="../assets/images/example_sections_mobile.png" alt="example sections mobile">
                                <ul>
                                    <li>transports,</li>
                                    <li>mājsaimniecība,</li>
                                    <li>komercdarbība,</li>
                                    <li>bioenerģijas apgāde,</li>
                                    <li>enerģijas ražošana.</li>
                                </ul>
                                <p>Katram no sektoriem ir vairāki apakšsektori, kam savukārt ir katram izstrādātas sektoram atbilstošas trajektorijas/ambīciju līmeņi. 
                                    <br><br><br>
                                    Katram apakšsektoram ir izstrādātas <b>4 trajektorijas (no 1. līdz 4. līmenim)</b>. Gadījumos, ja izvēle starp dažādām iespējām ir ar līdzīgu ambīciju līmeni vai ja jēdziens "ambīcija" nav īsti piemērojams, tad līmeņi ir apzīmēti ar <b>A, B, C un D, nevis 1, 2, 3 un 4.</b></p>
                            </div>
                            <div class="content-block__img-container">
                               <img class="img-tablet" src="../assets/images/example_sections_tablet.png" alt="example sections tablet">
                            </div>
                        </div>
                        <div class="content-block">
                            <div class="content-block__text-container">
                                <ol>
                                    <li>Sektori.</li>
                                    <li>Apašsektori.</li>
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
    name: 'ModalSections',
    components: {
            ButtonCloseModal,
            ButtonScroll
        }
}
</script>