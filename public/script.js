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
let data=JSON.parse("{"data":{"fielding":[{"title":"Fielding for Bangladesh Innings","scores":[{"name":"NLTC Perera","runout":0,"stumped":0,"bowled":1,"lbw":0,"catch":0,"pid":"233514"},{"name":"MD Gunathilaka","runout":0,"stumped":0,"bowled":1,"lbw":0,"catch":0,"pid":"345821"},{"name":"N Dickwella","runout":0,"stumped":0,"bowled":0,"lbw":0,"catch":1,"pid":"429754"},{"name":"A Dananjaya","runout":0,"stumped":0,"bowled":0,"lbw":0,"catch":1,"pid":"574178"},{"name":"BKG Mendis","runout":0,"stumped":0,"bowled":0,"lbw":1,"catch":0,"pid":"629074"}]},{"title":"Fielding for Sri Lanka Innings","scores":[{"name":"Mushfiqur Rahim","runout":0,"stumped":1,"bowled":0,"lbw":0,"catch":0,"pid":"56029"},{"name":"Soumya Sarkar","runout":0,"stumped":0,"bowled":0,"lbw":0,"catch":1,"pid":"436677"},{"name":"Mohammad Saifuddin","runout":0,"stumped":0,"bowled":0,"lbw":0,"catch":1,"pid":"629070"},{"name":"Afif Hossain","runout":0,"stumped":0,"bowled":0,"lbw":0,"catch":1,"pid":"935995"}]}],"bowling":[{"scores":[{"6s":2,"4s":5,"0s":7,"Econ":"13.00","W":"0","R":"39","M":"0","O":"3","bowler":"DSK Madushanka","pid":"1043681"},{"6s":0,"4s":1,"0s":4,"Econ":"8.00","W":"1","R":"16","M":"0","O":"2","bowler":"MD Gunathilaka","pid":"345821"},{"6s":1,"4s":4,"0s":4,"Econ":"11.25","W":"1","R":"45","M":"0","O":"4","bowler":"I Udana","pid":"328026"},{"6s":0,"4s":3,"0s":7,"Econ":"9.00","W":"1","R":"36","M":"0","O":"4","bowler":"NLTC Perera","pid":"233514"},{"6s":1,"4s":2,"0s":6,"Econ":"8.00","W":"0","R":"32","M":"0","O":"4","bowler":"A Dananjaya","pid":"574178"},{"6s":1,"4s":1,"0s":6,"Econ":"7.00","W":"2","R":"21","M":"0","O":"3","bowler":"BMAJ Mendis","pid":"49700"}],"title":"Bowling To Bangladesh Innings"},{"scores":[{"6s":1,"4s":2,"0s":11,"Econ":"6.25","W":"2","R":"25","M":"0","O":"4","bowler":"Nazmul Islam","pid":"446810"},{"6s":0,"4s":7,"0s":1,"Econ":"16.50","W":"0","R":"33","M":"0","O":"2","bowler":"Mohammad Saifuddin","pid":"629070"},{"6s":2,"4s":1,"0s":3,"Econ":"11.50","W":"0","R":"23","M":"0","O":"2","bowler":"Mahmudullah","pid":"56025"},{"6s":2,"4s":6,"0s":5,"Econ":"14.18","W":"1","R":"52","M":"0","O":"3.4","bowler":"Rubel Hossain","pid":"300619"},{"6s":1,"4s":5,"0s":7,"Econ":"10.66","W":"0","R":"32","M":"0","O":"3","bowler":"Mustafizur Rahman","pid":"330902"},{"6s":2,"4s":2,"0s":4,"Econ":"13.00","W":"1","R":"26","M":"0","O":"2","bowler":"Afif Hossain","pid":"935995"}],"title":"Bowling To Sri Lanka Innings"}],"batting":[{"scores":[{"dismissal-by":{"name":"MD Gunathilaka","pid":"345821"},"dismissal":"bowled","SR":111,"6s":0,"4s":1,"B":9,"R":10,"dismissal-info":" b Gunathilaka","batsman":"Zakir Hasan","pid":"56166"},{"dismissal-by":{"name":"BKG Mendis","pid":"629074"},"dismissal":"lbw","SR":159,"6s":2,"4s":6,"B":32,"R":51,"dismissal-info":"lbw b Mendis","batsman":"Soumya Sarkar","pid":"436677"},{"dismissal":"not out","SR":150,"6s":1,"4s":7,"B":44,"R":66,"dismissal-info":"not out","batsman":"Mushfiqur Rahim  ","pid":"56029"},{"dismissal-by":{"name":"N Dickwella","pid":"429754"},"dismissal":"catch","SR":0,"6s":0,"4s":0,"B":2,"R":0,"dismissal-info":"c  Dickwella b Mendis","batsman":"Afif Hossain","pid":"935995"},{"dismissal-by":{"name":"A Dananjaya","pid":"574178"},"dismissal":"catch","SR":138,"6s":2,"4s":2,"B":31,"R":43,"dismissal-info":"c Dananjaya b Udana","batsman":"Mahmudullah (c)","pid":"56025"},{"dismissal-by":{"name":"NLTC Perera","pid":"233514"},"dismissal":"bowled","SR":50,"6s":0,"4s":0,"B":2,"R":1,"dismissal-info":" b Perera","batsman":"Sabbir Rahman","pid":"373538"},{"dismissal":"not out","SR":100,"6s":0,"4s":0,"B":1,"R":1,"dismissal-info":"not out","batsman":"Ariful Haque","pid":"270135"}],"title":"Bangladesh Innings"},{"scores":[{"dismissal-by":{"name":"Soumya Sarkar","pid":"436677"},"dismissal":"catch","SR":196,"6s":2,"4s":8,"B":27,"R":53,"dismissal-info":"c Soumya Sarkar b Afif Hossain","batsman":"BKG Mendis","pid":"629074"},{"dismissal-by":{"name":"Mushfiqur Rahim","pid":"56029"},"dismissal":"stumped","SR":200,"6s":0,"4s":6,"B":15,"R":30,"dismissal-info":"st  Mushfiqur Rahim b Nazmul Islam","batsman":"MD Gunathilaka","pid":"345821"},{"dismissal-by":{"name":"Afif Hossain","pid":"935995"},"dismissal":"catch","SR":57,"6s":0,"4s":0,"B":7,"R":4,"dismissal-info":"c Afif Hossain b Nazmul Islam","batsman":"WU Tharanga","pid":"50747"},{"dismissal":"not out","SR":175,"6s":3,"4s":3,"B":24,"R":42,"dismissal-info":"not out","batsman":"MD Shanaka","pid":"437316"},{"dismissal-by":{"name":"Mohammad Saifuddin","pid":"629070"},"dismissal":"catch","SR":122,"6s":0,"4s":2,"B":9,"R":11,"dismissal-info":"c Mohammad Saifuddin b Rubel Hossain","batsman":"N Dickwella  ","pid":"429754"},{"dismissal":"not out","SR":216,"6s":3,"4s":4,"B":18,"R":39,"dismissal-info":"not out","batsman":"NLTC Perera","pid":"233514"}],"title":"Sri Lanka Innings"}],"team":[{"players":[{"name":"Zakir Hasan","pid":"697059"},{"name":"Zakir Hasan","pid":"56166"},{"name":"Soumya Sarkar","pid":"436677"},{"name":"Mushfiqur Rahim","pid":"56029"},{"name":"Afif Hossain","pid":"935995"},{"name":"Mahmudullah","pid":"56025"},{"name":"Sabbir Rahman","pid":"373538"},{"name":"Ariful Haque","pid":"270135"},{"name":"Mohammad Saifuddin","pid":"629070"},{"name":"Nazmul Islam","pid":"446810"},{"name":"Mustafizur Rahman","pid":"330902"},{"name":"Rubel Hossain","pid":"300619"}],"name":"Bangladesh"},{"players":[{"name":"BKG Mendis","pid":"629074"},{"name":"MD Gunathilaka","pid":"345821"},{"name":"WU Tharanga","pid":"50747"},{"name":"MD Shanaka","pid":"437316"},{"name":"N Dickwella","pid":"429754"},{"name":"NLTC Perera","pid":"233514"},{"name":"LD Chandimal","pid":"300628"},{"name":"BMAJ Mendis","pid":"49700"},{"name":"A Dananjaya","pid":"574178"},{"name":"DSK Madushanka","pid":"1043681"},{"name":"I Udana","pid":"328026"}],"name":"Sri Lanka"}],"man-of-the-match":"","toss_winner_team":"Bangladesh","winner_team":"Sri Lanka","matchStarted":true},"type":"T20I","dateTimeGMT":"2018-02-15T11:00:00.000Z","cache3":true,"creditsLeft":240,"v":"1","ttl":7,"provider":{"source":"Various","url":"https://cricapi.com/","pubDate":"2018-02-15T17:34:35.021Z"}}");
team1_head.on("click", function (eve) {
    /*arr0.toggleClass("ani");
    if(arr1.hasClass("ani")){
        arr1.removeClass("ani");
    }
    if(team1_head.hasClass("active")){
        return;
    }*/
    batsmen(nam0.text());
    bowler(nam0.text());
});
team2_head.on("click", function () {
    /*arr1.toggleClass("ani");
    if(arr0.hasClass("ani")){
        arr0.removeClass("ani");
    }
    if(team2_head.hasClass("active")){
        return;
    }*/
    batsmen(nam1.text());
    bowler(nam1.text());
});
//  $.ajax({
//      url:"http://192.168.0.100:8080/unique_id/1130746",
//      type:"GET"
//  }).done(function (json) {
//      console.log(json);
//      team1_head.text(json['data']['team'][0]['name']);
//      team2_head.text(json['data']['team'][1]['name']);
// data = json;
//      display();
//  }).fail(function (xhr, status) {
//      console.log("oops " + status);
//  });
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
    }};
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
    let count = 0;
    $.each(tempData, function (index, value) {
        temp += `<tr><td>${tempData[count][indices[0]]}</td><td>${tempData[count][indices[1]]}</td><td>${tempData[count][indices[2]]}</td><td>${tempData[count][indices[3]]}</td><td>${tempData[count][indices[4]]}</td><td>${tempData[count][indices[5]]}</td><td>${tempData[count][indices[6]]}</td></tr>`;
        count++;
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
    let count = 0;
    $.each(tempData, function (index, value) {
        temp += `<tr><td>${tempData[count][indices[0]]}</td><td>${tempData[count][indices[1]]}</td><td>${tempData[count][indices[2]]}</td><td>${tempData[count][indices[3]]}</td><td>${tempData[count][indices[4]]}</td><td>${tempData[count][indices[5]]}</td></tr>`;
        count++;
    });

    tabBowl.html("");
    tabBowl.html(temp);
}
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
// export {display};
display();
