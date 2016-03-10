$("#myChart").click( 
    function(evt){
        var activePoints = myNewChart.getSegmentsAtEvent(evt);           
        /* do something */
    }
);