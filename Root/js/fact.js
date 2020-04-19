
//https://www.invisionapp.com/inside-design/statistics-on-user-experience/ for facts

var facts = 
[

    '"Infinite scrolling can lower your bounce rate. Time.com’s bounce rate dropped 15 percentage points after they adopted continuous scroll."',
    '"In 10 years, a $10,000 investment in design-centric companies would have yielded returns 228% greater than the same investment in the S&P."',
    '"ESPN.com revenues jumped 35% after they listened to their community and incorporated suggestions into their homepage redesign."',
    '"Choosing a specific blue over some other hues amounted to an additional $80 million in annual revenue for Bing."',
    '"For every $1 spent on email marketing, the average return is $44.25."',
    '"88% of online consumers are less likely to return to a site after a bad experience."',
    '"Slow-loading websites cost retailers £1.73 billion ($2.6 billion) in lost sales each year."',
    '"Judgments on website credibility are 75% based on a website’s overall aesthetics.Twitter Logo."',
    '"First impressions are 94% design-related."',
    '"85% of adults think that a company’s mobile website should be as good or better than their desktop website."',
    '"90% of people use multiple screens sequentially."',
    '"You’re 279.64 times more likely to climb Mount Everest than click on a banner ad."'
]

function factCheck()
{
    var randomGen = Math.floor(Math.random()*(facts.length));
    document.getElementById('factDisplay').innerHTML = facts[randomGen];

}
