## bugs / issues's
1. I can navigate to an invalid date but the page doesn't show invalid date instead it shows No events found
    - Steps to reproduce: 
        1. Open `https://damian-events.coursedog.com/` in a web broswer
        2. Appened the url with an invalid date, like `https://damian-events.coursedog.com/2021/9/40`
        3. Check the message on the page 
        Actual: I see No events found message with an invalid date as "Sunday, October 40, 2021" 
        Expected: I should see Invalid date message and shouldn't see the invalid date
        Screenshot: `./cypress/bug-report/screenshot-1.png`

2. UI suggestion: Current date isn't selected/highlighted 
    - Steps to reproduce: 
        1. Open the `https://damian-events.coursedog.com/` in a web broswer or go to today's event tab `https://damian-events.coursedog.com/today`
        2. Check the date calendar
        Actual: Current date isn't selected/highlited
        Expected: Current date should be selected/highlighted
        Screenshot: `./cypress/bug-report/screenshot-2.png` & `./cypress/bug-report/screenshot-3.png`