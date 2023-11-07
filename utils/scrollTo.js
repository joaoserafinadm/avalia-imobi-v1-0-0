export default function scrollTo(id) {

    if (id) {
        setTimeout(() => {
            var my_element = document.getElementById(id);
            my_element.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest"
            });

        }, 50)

    } else {
        return 
    }



}