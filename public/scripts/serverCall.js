// import {display} from './script.js';

let livMat = $("#livMat");
let nexMat = $("#nexMat");
// livMat.on("click", "a", function (event) {
//     $.ajax({
//         url:"http://192.168.0.103:8080",
//         data:{
//             unique_id:$(this).attr("id")
//         },
//         type:"GET"
//     }).done(function (json) {
//         // display.display(json);
//     }).fail(function (xhr, status) {
//         console.log(status);
//     });
// });
$.ajax({
    url:"http://192.168.0.102:8080/currMatch",
    type:"GET",
}).done(function(json){
    // console.log(JSON.parse(json));
    displayLiv(JSON.parse(json));
}).fail(function (xhr, status) {
    console.log(status);
});
$.ajax({
    url:"http://192.168.0.102:8080/nextMatch",
    type:"GET",
}).done(function(json){
    // console.log(JSON.parse(json));
    displayNex(JSON.parse(json));
}).fail(function (xhr, status) {
    console.log(status);
});
function displayLiv(json) {
    let temp = "";
    $.each(json, function (index, value) {
        temp += `<li ><div class = "collapsible-header"  id = ${value['unique_id']}>${value['team_1']} vs ${value['team_2']}<span class="badge nolink" style="margin-right: 15px">${value['type']}</span> <a href="scorecard.html"}><span class="badge right scorelink">Live Score</span></a> </div>
                <div class="collapsible-body">
                    <ul id = "team1">
                        <li>Winning Team</li>
                    </ul>
                </div></li>`;
    });
    livMat.html("");
    livMat.html(temp);
};
function displayNex(json) {
    let temp = "";
    $.each(json, function (index, value) {
        temp += `<li ><div class = "collapsible-header"  id = ${value['unique_id']}>${value['team_1']} vs ${value['team_2']}<span class="badge nolink" style="margin-right: 15px">${value['type']}</span> </div>
                <div class="collapsible-body">
                    <ul id = "team1">
                        <li>Winning Team</li>
                    </ul>
                </div></li>`;
    });
    nexMat.html("");
    nexMat.html(temp);
};
    // temp = "";
    // json['Nextmatch'].each(function (index, value) {
    //     temp += `<li  id = ${value['unique_id']}><div class = "collapsible-header" >${value['team-1']} + " vs " + ${value['team-2']}</div>
    //             <div class="collapsible-body">
    //                 <ul id = "team1">
    //                     <li>Win Toss</li>
    //                 </ul>
    //             </div></li>`;
    // });
    // nexMat.html();
    // nexMat.html(temp);
// }