var product = [{
    id: 1,
    img: 'https://scontent.fcnx4-1.fna.fbcdn.net/v/t39.30808-6/313427684_194734163078430_3788031055796561498_n.jpg?_nc_cat=100&cb=99be929b-3346023f&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=X2QGKU5z0XUAX9K4sY6&_nc_ht=scontent.fcnx4-1.fna&oh=00_AfAGma_PuZ0eo2Npi371NrEjrkQHqCDamj43SLms44hgiQ&oe=64DE6044',
    name: 'SKIN THERAPY LOTION',
    price: 149,
    descripion: 'โลชั่นรักษาโรคผิวหนังอย่างตรงจุด (สูตรสัตวแพทย์) ตัวนี้การันตีแผลหายไวมาก 🛁เหมาะกับใคร?🐱🐶🐰ใช้ได้ทั้งแมว,สุนัข และกระต่ายหรือสัตว์เลี้ยงพันธุ์เล็กก็ใช้ได้⭐️⭐️⭐️⭐️⭐️น้องแมวสามารถเลียได้อีกด้วยส่งรูปและเล่าอาการปรึกษากันก่อนซื้อได้เลยแอดมินตอบกลับภายใน24 ชม.',
    type: 'ยารักษา'
}, {
    id: 2,
    img: 'https://scontent.fcnx4-1.fna.fbcdn.net/v/t39.30808-6/315008870_197406639477849_3706228433028503254_n.jpg?_nc_cat=108&cb=99be929b-3346023f&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=H1ny3pNnQOkAX_TpuDU&_nc_ht=scontent.fcnx4-1.fna&oh=00_AfBCTYQ1VqzaC-gWmTcBofQVfGqpIRC9ZxX59P2H_niEmQ&oe=64DF6C0C',
    name: 'คิเรอิ เช็ดตา+หูแมว',
    price: 99,
    descripion:'* เช็ดสะอาดขี้ตาหลุดออกมาเป็นแผ่นๆ ตั้งแต่สำลีแผ่นแรก * เช็ดคราบไรหูในช่องหูได้สะอาดหมดจด สะอาดจริง * ลดกลิ่นบนใบหน้าและหูได้* กำจัดแบคทีเรียในสัตว์เลี้ยงสามารถใช้ได้ทั้งแมวและสุนัขทุกสายพันธุ์ไม่มีส่วนผสมของแอลกอฮอล์ ไม่เป็นอันตราย 100%',
    type: 'ยารักษา'
}, {
    id: 3,
    img: 'https://scontent.fcnx4-1.fna.fbcdn.net/v/t39.30808-6/275805020_137794545425166_253513943894333362_n.jpg?_nc_cat=110&cb=99be929b-3346023f&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=0BEHtU-U11YAX9FEF2G&_nc_ht=scontent.fcnx4-1.fna&oh=00_AfDADXNaY0TtJF2IhypZa4rkT66ydynoBAHz7GsZnwHKqw&oe=64DF29A0',
    name: 'ถุงเอนกประสงค์',
    price: 99,
    descripion:'ถุงเอนกประสงค์ มี 3 สีนะคะ ฟ้า💙 ส้ม🧡 เหลือง💛 ค่ะ',
    type: 'อุปกรณ์'
}, {
    id: 4,
    img: 'https://scontent.fcnx4-1.fna.fbcdn.net/v/t39.30808-6/275377533_136138048924149_4692721888511227033_n.jpg?_nc_cat=107&cb=99be929b-3346023f&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=bBeJ2cie_qsAX81ZofH&_nc_ht=scontent.fcnx4-1.fna&oh=00_AfD_A0AYBLxFCMnBw8wpiMmHHYU0uclMZm7zsepvtu2xQg&oe=64DF56AA',
    name: 'สเปรย์กำจัดเห็บ+บำรุงขนสุนัขและแมว',
    price: 319 ,
    descripion:'- ผลิตจากออแกนิค 100% ไม่ก่อให้เกิดการแพ้   - สุนัขและแมว สามารถเลียขนได้ ปลอดภัย- มีส่วนผสมของสารสกัดจากอัลมอน ช่วยบำรุงทำให้ขนนุ่ม แข็งแรง  มากยิ่งขึ้น- สมุนไพรช่วยให้แผลจากเห็บหมัดสมานได้เร็ว จากสารสกัดอัลมอนด์- สมุนไพรได้รับการรับรองจากงานวิจัย ว่าสมุนไพร แต่ละชนิดสามารถ กำจัดเห็บหมัดได้จริง- ใช้ได้กับสัตว์เลี้ยงหลายชนิด สุนัข แมว กระต่าย หนู  ชูการ์ ไกลเดอร์ - ไม่เป็นอัตรายต่อเด็ก คนภายในบ้าน สัตว์เลี้ยง และครอบครัว ',
    type: 'อุปกรณ์'
}];

$(document).ready(() =>{
    var html = '';
    for (let i = 0; i < product.length; i++) {
        html += `<div onclick="openproductdeteil(${i})" class="product-item ${product[i].type}">
                    <img class="product-img" src="${product[i].img}" alt="">
                    <p stlye="font-size: 1.2vw;">${product[i].name}</p>
                    <p stlye="font-size: .9vw;">${product[i].price}฿</p>
                </div>`;
    }
    $("#productlist").html(html);
})

function searchacb(elem) {
    //console.log(elem.id)
    var value = $('#'+elem.id).val()
    console.log(value)

    var html = '';
    for (let i = 0; i < product.length; i++) {
        if(product[i].name.includes(value) ) {
            html += `<div onclick="openproductdeteil(${i})" class="product-item ${product[i].type}">
                        <img class="product-img" src="${product[i].img}"alt="">
                        <p stlye="font-size: 1.2vw;">${product[i].name}</p>
                        <p stlye="font-size: .9vw;">${product[i].price}฿</p>
                    </div>`; 
        }
    }
    if(html == '') {
        $("#productlist").html(`<p>ไม่พบรายการสินค้า<\p>`);
    } else {
        $("#productlist").html(html);
    }
    
}

function searchproduct(param) {
    console.log(param)
    $(".product-item").css('display', 'none')
    if(param == 'สินค้าทั้งหมด') {
        $(".product-item").css('display', 'block')
    }
    else {
        $("."+param).css('display', 'block')
    }
}

var productindex = 0;
function openproductdeteil(index) {
    productindex = index;
    console.log(productindex)
    $("#modaldesc").css('display', 'flex')
    $("#mdd-img").attr('src', product[index].img);
    $("#mdd-name").text(product[index].name);
    $("#mdd-price").text((product[index].price)+ ' ฿');
    $("#mdd-desc").text(product[index].descripion);
}

function closeModal() {
    $(".modal").css('display', 'none')
}

var cart = [];
function addtocart() {
    var pass = true;

    for (let i = 0; i < cart.length; i++){
        if( productindex == cart[i].index ){
            console.log('found same product')
            cart[i].count++;
            pass = false;
        }
    }

    if(pass) {
        var obj = {
            index: productindex,
            id: product[productindex].id,
            name: product[productindex].name,
            price: product[productindex].price,
            img: product[productindex].img,
            count:1
        };
        //console.log(obj)
        cart.push(obj)
    }
    console.log(cart)

    Swal.fire({
        icon: 'success',
        title: 'เพิ่ม' + product[productindex].name + ' ไปยังตระกร้าสินค้า !'
    })
    $("#cartcount").css('display','flex').text(cart.length)
}

function openCart(){
    $('#modalCart').css('display', 'flex')
    rendercart();
}

function rendercart(){
    if(cart.length > 0){
        var html = '';
        for (let i = 0; i < cart.length; i++){
            html += `<div class="cart-item">
                        <div class="cart-left">
                            <img src="${cart[i].img}" alt="">

                            <div class="cartleft-deteail">
                                <p style="font-size: 1.5vw;">${cart[i].name}</p>
                                <p style="font-size: 1.2vw;">${cart[i].price * cart[i].count } ฿</p>

                            </div>

                        </div>

                        <div class="catr-right">
                            <p onclick="deinitems('-', ${i})" class="btnc">-</p>
                            <p id="countitems${i}" style="margin: 0 20px;">${cart[i].count}</p>
                            <p onclick="deinitems('+', ${i})" class="btnc">+</p>
                        </div>
                    </div>`;
        }
        $("#mycart").html(html)
    }
    else{
        $('#mycart').html(`<p>ไม่มีสินค้า</p>`)
    }
}

function deinitems(action, index) {
    if(action == '-') {
        if(cart[index].count > 0) {
            cart[index].count--;
            $("#countitems"+ index).text(cart[index].count)

            if(cart[index].count <= 0) {
                Swal.fire({
                    icon: 'wraning',
                    title: 'ต้องการลบสินค้าชิ้นนี้ไหม',
                    showConfirmButton: true,
                    showCancelButton: true,
                    showConfirmButton: 'Delete',
                    cancelButtonText: 'Cancel'
                }).then((res) => {
                    if(res.isConfirmed) {
                        cart.splice(index, 1)
                        console.log(cart)
                        rendercart();
                        $("#cartcount").css('display','flex').text(cart.length)
                        if(cart.length <= 0 ) {
                            $("#cartcount").css('display','none')
                        }
                    }
                    else{
                        cart[index].count++;
                        $("#countitems"+index).text(cart[index].count)

                    }
                })
                
            }
        }
    }
    else if(action == '+'){
        cart[index].count++;
        $("#countitems"+index).text(cart[index].count)

    }
    
    
    
}

function buynow() {
    var total = 0; //รวมราคาสินค้าก่อนลด
    var last_total = 0; //เอาไว้รวมราคาสินค้าหลังจากลดราคาแล้ว

    for (let i = 0; i < cart.length; i++) {
        total = cart[i].price * cart[i].count; //รวมราคาสินค้า ราคาxจำนวน แล้วเอาผลลัพไปเช็ค ถ้า > 1000 จะลดให้
        if (total > 1000) { //ตรวจสอบว่าเกิน 1000 หรือไม่
            total *= 0.9; // ถ้าเกินลด 10%
        } 
        last_total += total; //เอาผลลัพไปใส่ใน last_total
        total = 0; //เคลียค่าใหม่ 
    }


    //เอาไว้แสดงผล
    Swal.fire({
        icon: 'info',
        title: 'Total Price',
        text: `Total price: ${last_total.toFixed(2)} ฿`,
        confirmButtonText: 'Proceed to Checkout'
    }).then((result) => {
        if (result.isConfirmed) {
            cart = [];
            rendercart();
            $("#cartcount").css('display', 'none');
        }
    });
}
