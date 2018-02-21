let nam0 = $("#tmName0");
let nam1 = $("#tmName1");
let tabBat = $("#bat");
let tabBowl = $("#bowl");
let team1 = $("#team1");
let team2 = $("#team2");
let team1_head = $("#team1-head");
let team2_head = $("#team2-head");
let arr0 = $("#arr0");
let arr1 = $("#arr1");
let data;
// team1.on("click", "li", function(event){
// let pid = $(event.target).attr("id");
// $.ajax({
//     url:"http://192.168.0.102:8080/pid/" + pid,
//     type:"GET"
// }).done(function (json) {
//     playerInfo(JSON.parse(json));
// }).fail(function (xhr, status) {
//     console.log("oops " + status);
// })
// });
// id = 1130746
team1_head.on("click", function() {
    arr0.toggleClass("ani");
    if(arr1.hasClass("ani")) {
        arr1.removeClass("ani");
    }
    if(team1_head.hasClass("active")){
        return;
    }
    batsmen(nam0.text());
    bowler(nam0.text());
});
team2_head.on("click", function () {
    arr1.toggleClass("ani");
    if(arr0.hasClass("ani")){
        arr0.removeClass("ani");
    }
    if(team2_head.hasClass("active")){
        return;
    }
    batsmen(nam1.text());
    bowler(nam1.text());
});
$.ajax({
    url:"http://localhost:8080/unique_id/" + 1130746/*decodeURIComponent(window.location.search.split("=")[1])*/,
    type:"GET"
}).done(function (json) {
    team1_head.text(json['data']['team'][0]['name']);
    team2_head.text(json['data']['team'][1]['name']);
    data = json;
    display();
}).fail(function (xhr, status) {
    console.log("oops " + status);
});
function display(){
    let temp = "";
    let toss=$("#toss");
    toss.text(data['data']['toss_winner_team'] + " won the toss");
    nam0.text(data['data']['team'][0]['name']);
    nam1.text(data['data']['team'][1]['name']);
    let names = players(nam0.text());
    $.each(names, function (key, value) {
        temp += `<li id = ${value['pid']}>${value['name']}</li>`;
    });
    team1.html("");
    team1.html(temp);
    temp = "";
    names = players(nam1.text());
    $.each(names, function (key, value) {
        temp += `<li id = ${value['pid']}>${value['name']}</li>`;
    });
    team2.html("");
    team2.html(temp);
    if(data['data']['batting'][0]['title'].startsWith(nam0.text())){
        if(team2.parent().prev().hasClass("active")){
            team2.parent().prev().removeClass("active")
        }
        team1.parent().prev().addClass("active");
        arr0.addClass("ani");
        batsmen(nam0.text());
        bowler(nam0.text());
    }else{
        if(team1.parent().prev().hasClass("active")){
            team1.parent().prev().removeClass("active")
        }
        team2.parent().prev().addClass("active");
        arr1.addClass("ani");
        batsmen(nam1.text());
        bowler(nam1.text());
    }
    if(team1_head.hasClass("active")){
        if(toss.text().startsWith(nam0.text())){
            toss.text(toss.text() + " and chose to bat first.")
        }else{
            toss.text(toss.text() + " and chose to bowl first.")
        }
    }else{
        if(toss.text().startsWith(nam1.text())){
            toss.text(toss.text() + " and chose to bat first.")
        }else{
            toss.text(toss.text() + " and chose to bowl first.")
        }
    }}
// function playerInfo(json){
//
// }
function players(tname){
    let arr = [];
    let tempData;
    if(data['data']['team'][0]['name'] === tname){
        tempData = data['data']['team'][0]['players'];
    }else
    {
        tempData = data['data']['team'][1]['players'];
    }
    $.each(tempData, function(index, value){
        arr.push({"name" :value['name'], "pid":value['pid']});
    });
    return arr;
}
function batsmen(tname){
    let length = data['data']['batting'].length;
    let temp = "";
    let indices = ['batsman', 'dismissal-info', 'R', 'B', '4s', '6s', 'SR'];
    let tempData;
    if(data['data']['batting'][0]['title'].startsWith(tname)){
        if(length > 0)
            tempData = data['data']['batting'][0]['scores'];
        else {
            tabBat.html("");
            return;
        }
    }else
    {
        if(length > 1)
            tempData = data['data']['batting'][1]['scores'];
        else {
            tabBat.html("");
            return;
        }
    }
    $.each(tempData, function (index) {
        temp += `<tr>
                    <td>${tempData[index][indices[0]]}</td>
                    <td>${tempData[index][indices[1]]}</td>
                    <td>${tempData[index][indices[2]]}</td>
                    <td>${tempData[index][indices[3]]}</td>
                    <td>${tempData[index][indices[4]]}</td>
                    <td>${tempData[index][indices[5]]}</td>
                    <td>${tempData[index][indices[6]]}</td>
                 </tr>`;
    });
    tabBat.html("");
    tabBat.html(temp);
}
function bowler(tname){
    let length = data['data']['bowling'].length;
    //console.log(length);
    let temp = "";
    let indices = ['bowler', 'O', 'M', 'R', 'W', 'Econ'];
    let tempData;
    if(data['data']['batting'][0]['title'].startsWith(tname)){
        if(length > 0)
            tempData = data['data']['bowling'][0]['scores'];
        else {
            tabBowl.html("");
            return;
        }
    }else
    {
        if(length > 1)
            tempData = data['data']['bowling'][1]['scores'];
        else {
            tabBowl.html("");
            return;
        }
    }
    $.each(tempData, function (index) {
        temp += `<tr>
                    <td>${tempData[index][indices[0]]}</td>
                    <td>${tempData[index][indices[1]]}</td>
                    <td>${tempData[index][indices[2]]}</td>
                    <td>${tempData[index][indices[3]]}</td>
                    <td>${tempData[index][indices[4]]}</td>
                    <td>${tempData[index][indices[5]]}</td>
                 </tr>`;
    });

    tabBowl.html("");
    tabBowl.html(temp);
}
