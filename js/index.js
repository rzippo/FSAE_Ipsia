var currentStage = 1;

var stagesNumber = 13;

function clickActiveArea()
{
    if(++currentStage <= stagesNumber)
        loadStage(currentStage);
}

$(function() {
    $(".active-area").click(clickActiveArea);
    $(stageImgSelector).ready(loadStage.bind(this, currentStage));
});
