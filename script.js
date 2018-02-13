let tabBat;
let tabBowl;
let team1;
let team2;
let team1_head = $("#team1-head");
let team2_head = $("#team2-head");
team1_head.on("click", function (eve) {
     toggleTeam(eve.target);
});
team2_head.on("click", function () {
     toggleTeam(eve.target);
});
// $.ajax({
//     url:"http://192.168.0.103:8080",
//     data:{
//         unique_id:;
//     }
//     type:"GET"
// }).done(function (json) {
//     team1_head.text(json['data']['team'][0]['name']);
//     team2_head.text(json['data']['team'][1]['name']);
//     display();
// }).done(function (xhr, status) {
//     console.log("oops " + status);
// });
/*
function toggleTeam(ele){

}*/
function display(json){
  let temp = "x";
  console.log(temp);
    // let names = players(0);
    // $.each(names, function (index, value) {
    //     temp += `<li>${value}</li>`;
    // });
    // team1.html("");
    // team1.html(temp);
    // temp = "";
    // names = players(1);
    // $.each(names, function (index, value) {
    //     temp += `<li>${value}</li>`;
    // });
    // team2.html("");
    // team2.html(temp);
    // batsmen();
    // bowler();
}/*
function players(i){
    let arr = [];
    let tempData = data['data']['team'][i]['players'];
    $.each(tempData, function(index, value){
       arr.push(value['name']);
    });
    return arr;
}
function batsmen(){
    let temp = "";
    let indices = ['batsman', 'dismissal-info', 'R', 'B', '4s', '6s', 'SR'];
    let tempData = data['data']['batting'][0]['scores'];
    let count = 0;
    $.each(tempData, function (index, value) {
        temp += `<tr><td>${tempData[count][indices[0]]}</td><td>${tempData[count][indices[1]]}</td><td>${tempData[count][indices[2]]}</td><td>${tempData[count][indices[3]]}</td><td>${tempData[count][indices[4]]}</td><td>${tempData[count][indices[5]]}</td><td>${tempData[count][indices[6]]}</td></tr>`;
        count++;
    });
    tabBat.html("");
    tabBat.html(temp);
}
function bowler(){

    let temp = "";
    let indices = ['bowler', 'O', 'M', 'R', 'W', 'Econ'];
    let tempData = data['data']['bowling'][0]['scores'];
    let count = 0;
    $.each(tempData, function (index, value) {
        temp += `<tr><td>${tempData[count][indices[0]]}</td><td>${tempData[count][indices[1]]}</td><td>${tempData[count][indices[2]]}</td><td>${tempData[count][indices[3]]}</td><td>${tempData[count][indices[4]]}</td><td>${tempData[count][indices[5]]}</td></tr>`;
        count++;
    });

    tabBowl.html("");
    tabBowl.html(temp);
}*/
// function teamNames(id){
//     $.each(matchList['matches'], function (value) {
//         // console.log("i");
//
//         if(value['unique_id'] === id){
//           console.log("i");
//           teams[0].text(value['team-1']);
//           teams[1].text(value['team-2']);
//       }
//     });
export {display};