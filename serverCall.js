import display from './script';
let livMat = $("#livMat");
let nexMat = $("#nexMat");
livMat.on("click", "a", function (event) {
    $.ajax({
        url:"http://192.168.0.103:8080",
        data:{
            unique_id:$(this).parent().attr("")
        },
        type:"GET"
    }).done(function (json) {
        display.display(json);
    }).fail(function (xhr, status) {
        console.log(status);
    });
});
$.ajax({
    url:"http://192.168.0.103:8080/",
    type:"GET",
}).done(function(json){
    console.log(json);
    display(JSON.parse(json));
}).fail(function (xhr, status) {
    console.log(status);
});

function display(json) {
    let temp = "";
    $.each(json['Currmatch'], function (index, value) {
        temp += `<li ><div id = ${value['unique_id']} class = "collapsible-header" >${value['team_1']} vs ${value['team_2']}<span class="badge nolink" style="margin-right: 15px">${value['type']}</span> <a href="scorecard.html"><span class="badge right scorelink">Live Score</span></a> </div>
                <div class="collapsible-body">
                    <ul id = "team1">
                        <li>Winning Team</li>
                    </ul>
                </div></li>`;
    });
    livMat.html("");
    livMat.html(temp);
    temp = "";
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
}