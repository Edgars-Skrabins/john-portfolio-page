let menuOn:boolean = false;

const mobileMenuBtn:HTMLElement = document.getElementById("btn-mobile-menu");
mobileMenuBtn.addEventListener("click", ToggleHamburgerMenu);

const hamburgerMenu:HTMLElement = document.getElementById("hamburger-menu");

hamburgerMenu.classList.add("hidden")

function ToggleHamburgerMenu():void
{
    if(menuOn)
    {
        hamburgerMenu.classList.add("hidden")
        menuOn = false;
    }
    else{
        hamburgerMenu.classList.remove("hidden")
        menuOn = true;
    }
}
