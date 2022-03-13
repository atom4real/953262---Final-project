function searching() {
    console.log(document.getElementById('name-food').value);
    // if(document.getElementById('name-food').value == "Honey-glazed onion rings") {
    //     document.getElementById("click_item1").click();
    // }
    // else if(document.getElementById('name-food').value == "Smoked chicken quesadilla") {
    //     document.getElementById("click_item2").click();
    // }
    switch(document.getElementById('name-food').value) {
        case "Honey-glazed onion rings":
            document.getElementById("click_item1").click();
            break;
        case "Smoked chicken quesadilla":
            document.getElementById("click_item2").click();
            break;
        case "Fried calamari":
            document.getElementById("click_item3").click();
            break;
        case "Baked brie":
            document.getElementById("click_item4").click();
            break;
        case "Mushroom and potato tart":
            document.getElementById("click_item5").click();
            break;
        case "Stuffed sweet italian peppers":
            document.getElementById("click_item6").click();
            break;
        case "Spinach salad":
            document.getElementById("click_item7").click();
            break;
        case "Red iceberg salad":
            document.getElementById("click_item8").click();
            break;
        case "Manhattan":
            document.getElementById("click_item9").click();
            break;
        case "Old fashioned":
            document.getElementById("click_item10").click();
            break;
        case "Ward Eight":
            document.getElementById("click_item11").click();
            break;
        case "The brazilian":
            document.getElementById("click_item12").click();
            break;
    }
}