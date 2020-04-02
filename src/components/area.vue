<template>
    <div class="form-item item-line" id="select_contact" @click="choose_area">
        <label>省、市</label>
        <div class="pc-box">
            <input type="hidden" name="contact_province_code" data-id="0001" id="contact_province_code" value="" data-province-name="">
            <input type="hidden" name="contact_city_code" id="contact_city_code" value="" data-city-name="">
            <span data-city-code="510100" data-province-code="510000" data-district-code="510105" id="show_contact">{{area}}</span>
        </div>
    </div>
</template>
<script>
    import '../assets/js/iosSelect.js'
    import '../assets/js/zepto.js'
    import country from '../assets/js/areaData_v2.js'
    import '../assets/css/iosSelect.css'
    export default {
        name: 'area',
        data(){
            return{
              area:'',oneLevelId:'contact_province_code',twoLevelId:'contact_city_code',threeLevelId:'show_contact',
            }
        },
        created() {

        },
        mounted() {

        },
        methods:{
            choose_area() {
                let that = this;
                var iosSelect = new IosSelect(3, [country.iosProvinces, country.iosCitys, country.iosCountys],
                    {
                        title: "选择省份、城市",
                        closeText: '',
                        sureText: '',
                        itemHeight: 35,
                        itemShowCount: 5,
                        relation: [1, 1],
                        container: '.container',
                        oneLevelId: this.oneLevelId,
                        twoLevelId: this.twoLevelId,
                        threeLevelId: this.threeLevelId,
                        callback: function (selectOneObj, selectTwoObj, selectThreeObj) {
                            that.oneLevelId = selectOneObj.id;
                            that.twoLevelId = selectTwoObj.id;
                            that.threeLevelId = selectThreeObj.id;
                            that.returnprovince = selectOneObj.value;
                            that.returncity = selectTwoObj.value;
                            that.returnregion = selectThreeObj.value;
                            that.area =
                                that.returnprovince + "-" + that.returncity + "-" + that.returnregion;


                        }
                    }
                );
            },
        }

    }

</script>
<style>

</style>