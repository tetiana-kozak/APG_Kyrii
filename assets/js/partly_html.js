class employers extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <div class="page__about-us" id="page__about-us">
                <div class="section-wrapper about-us">
                    <div class="about-us__container"> 
                        <div class="emp-block">
                            <img src="assets/images/projects/00_general/front.jpg" alt="" class="emp-block__photo">
                            <p class="emp-block__name">Lorem Ipsum</p>
                            <p class="emp-block__position">Architect</p>
                        </div>
                        <div class="emp-block">
                            <img src="assets/images/projects/00_general/front.jpg" alt="" class="emp-block__photo">
                            <p class="emp-block__name">Lorem Ipsum</p>
                            <p class="emp-block__position">Architect</p>
                        </div>
                        <div class="emp-block">
                            <img src="assets/images/projects/00_general/front.jpg" alt="" class="emp-block__photo">
                            <p class="emp-block__name">Lorem Ipsum</p>
                            <p class="emp-block__position">Architect</p>
                        </div>
                        <div class="emp-block">
                            <img src="assets/images/projects/00_general/front.jpg" alt="" class="emp-block__photo">
                            <p class="emp-block__name">Lorem Ipsum</p>
                            <p class="emp-block__position">Architect</p>
                        </div>
                        <div class="emp-block">
                            <img src="assets/images/projects/00_general/front.jpg" alt="" class="emp-block__photo">
                            <p class="emp-block__name">Lorem Ipsum</p>
                            <p class="emp-block__position">Architect</p>
                        </div>
                        <div class="emp-block emp-block-hiden">
                            <img src="assets/images/projects/00_general/front.jpg" alt="" class="emp-block__photo">
                            <p class="emp-block__name">Lorem Ipsum</p>
                            <p class="emp-block__position">Architect</p>
                        </div>
                    </div>                        
                </div>
            </div>
        `
    }
}

customElements.define('about-us', employers)