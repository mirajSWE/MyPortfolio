var experiencePic = new Array();

function loadTime()
{

    for (i=0; i < loadTime.arguments.length; i++)
    {
        experiencePic[i] = new Image();
        experiencePic[i].src = loadTime.arguments[i];
    }

}

loadTime("WF2.jpg", "WF3.jpg", "WF4.jpg", "WF5.jpg","WF6.jpg");
