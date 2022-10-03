let evenListener = document.getElementById("click-event-button").addEventListener("click", changeStyle);
function changeStyle()
{
    document.getElementById("text-content").style.color = "darkblue";
    document.getElementById("text-content").style.fontWeight = "bold";
    document.getElementById("text-content").style.fontSize = "3rem";
    document.getElementById("text-content").style.fontFamily = "Arial";
}