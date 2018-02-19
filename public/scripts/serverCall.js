// import {display} from './script.js';

let livMat = $("#livMat");
let nexMat = $("#nexMat");
// livMat.on("click", "a", function (event) {
//     $.ajax({
//         url:"http://localhost:8080",
//         // data:{
//         //     unique_id:$(this).attr("id")
//         // },
//         type:"GET"
//     }).done(function (json) {
//         // display.display(json);
//     }).fail(function (xhr, status) {
//         console.log(status);
//     });
// });
$.ajax({
    url:"http://localhost:8080/matchList",
    type:"GET",
}).done(function(json){
    console.log(json);
    ListSieve(json);
    displayLiv(currMat);
    displayNex(nextMat);
}).fail(function (xhr, status) {
    console.log(status);
});

let currMat = [];
let nextMat = [];
function ListSieve(json) {
    let date = new Date();
    let currDate = date.getFullYear() + "-" + check(date.getMonth() + 1) + "-" + check(date.getDate());
    for(let i = 0; i < json['matches'].length; i++){
        if(json['matches'][i]['date'].startsWith(currDate)){
            if(json['matches'][i]['matchStarted']){
                currMat.push(json['matches'][i]);
            }else{
                nextMat.push(json['matches'][i]);
            }
        }
    }
    console.log(currMat);
    console.log(nextMat);
}

function check(x) {
    if(x > 9){
        return x;
    }else{
        return "0" + x;
    }
}

function displayLiv(json) {
    let temp = "";
    $.each(json, function (index, value) {
        temp += `<li ><div class = "collapsible-header"  id = ${value['unique_id']} >${value['team-1']} vs ${value['team-2']}<span class="badge nolink" style="margin-right:15px">${value['type']}</span> <a href="scorecard.html?unique_id=${value['unique_id']}"><span class="badge right scorelink">Live Score</span></a> </div>
                <div class="collapsible-body">
                    <ul id = "team1">
                        <li>Winning Team</li>
                    </ul>
                </div></li>`;
    });
    livMat.html("");
    livMat.html(temp);
}

function displayNex(json) {
    let temp = "";
    $.each(json, function (index, value) {
        console.log(value['unique_id']);
        temp += `<li ><div class = "collapsible-header"  id = ${value['unique_id']}>${value['team-1']} vs ${value['team-2']}<span class="badge nolink" style="margin-right: 15px">${value['type']}</span> </div>
                <div class="collapsible-body">
                    <ul id = "team1">
                        <li>Winning Team</li>
                    </ul>
                </div></li>`;
    });
    nexMat.html("");
    nexMat.html(temp);
}
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