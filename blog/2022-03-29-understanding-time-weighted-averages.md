---
title: Understanding Time-Weighted Averages and Their Uses
author: Sooter Saalu
author_title: Guest Post
author_url: https://portal.draft.dev/writers/recNl3uCGPcaN7S8G
author_image_url: https://avatars.githubusercontent.com/u/53571625
description:
  In this article, you will explore time-weighted averages and how they compare
  with weighted averages. You will also learn more about their specific use
  cases.
keywords:
  - sql
  - jit
  - performance
  - timeseries
  - database
image: /img/blog/2022-03-29/cover.jpg
tags: [statistics, timeseries, analytics, data]
---

import Banner from "@theme/Banner"

<Banner
  alt="Photo courtesy of Maxim Hopman via Unsplash"
  height={360}
  src="/img/blog/2022-03-29/cover.jpg"
  width={650}
/>

Time-weighted averages can help you accurately summarize time series data,
especially in instances where the data is generated or sampled in sporadic
frequencies, meaning that the time between data points is not constant.

In this article, you will explore time-weighted averages and how they compare
with weighted averages. You will also learn more about their specific use cases.

<!--truncate-->

# Understanding Time-Weighted Averages and Their Uses

A _time-weighted average_ is a calculated mean that assigns importance to
specific time periods or the amount of time spent on a task or behavior. This is
an especially useful form of time series analysis that adds nuance and boosts
accuracy when you’re summarizing time series data.

Time series data in its raw state is often granular, and data points can be
generated in per-minute, per-second, or even smaller time intervals. Data
collected in this form can be difficult to use, so it’s crucial that you create
summaries and visualizations of the data. Additionally, you may not need all the
data in a time series; the noteworthy data is generally the outliers from the
norm and the sharp spikes in small time periods relative to the entire data set.

To address this issue, you can compress data using time buckets and intervals,
or you can sample it based on its relevance to the project. For example, you
might only collect data after a certain rate of change or a certain amount of
time has elapsed. This raises other concerns, though, because the data cannot be
accurately summarized with regular
[statistics of central tendency](https://www.abs.gov.au/websitedbs/D3310114.nsf/Home/Statistical+Language+-+measures+of+central+tendency).

Time-weighted averages can help you accurately summarize time series data,
especially in instances where the data is generated or sampled in sporadic
frequencies, meaning that the time between data points is not constant.

In this article, you will explore time-weighted averages and how they compare
with weighted averages. You will also learn more about their specific use cases.

## About Time-Weighted Averages

Generally, to calculate an average of numbers, you would add them and then
divide the result by the count of these numbers, producing an approximate middle
point. However, this method does not take into account the relative importance
of any of these numbers, suggesting that they are all equally valuable.

Weighted averages solve this problem by assigning importance in the form of
weights to the numbers; you would factor in these weights when calculating an
average. One
[example](https://www.brighthub.com/office/human-resources/articles/122947/) of
this method is performance review results. An organization rates an employee on
categories including quality of work, impact on company goals, communication
within teams, and even attendance at team gatherings.

To calculate an accurate average of that employee’s performance, the
organization needs to decide which categories are more important—whether quality
of work or impact on company goals, for instance, take priority over attendance.
The organization can express this priority as a numerical value (percentage or
decimals) and factor it into the calculation of the average. Weighted averages
have been used to great effect in
[education](https://www.edglossary.org/weighted-grades/) for calculating grade
point averages, as well as in the accounting and finance industries.

Time-weighted averages, though, deal with time and time series data. The
priority that you need to factor in is time-based, involving how frequently data
points are generated, how much time elapses between data points, or when exactly
an event occurs. This provides a more accurate summary of your time series data
points.

For example, an industrial company might need to summarize
[how much noise](https://sciencing.com/calculate-timeweighted-averages-8198651.html)
their workers are exposed to and whether this meets health and safety standards.
Given that each employee is exposed to noise at different levels and for
different time periods, a regular average will not be accurate. Using
time-weighted averages, you can multiply your measure of the noise the worker is
exposed to by the time spent working at that noise level. This will give a
time-weighted noise level that can be added up for each worker and divided by
the total time spent working:

```
Worker A spends 14 hours working at 100 dB level of noise, worker B spends 5 hours at 40 dB, and worker C spends 7 hours at 26 dB.

Time-weighted noise level will be (14 x 100), (5 x 40), and (7 x 26), which is 1400, 200, and 182.
This adds up to 1782.

Next, you calculate the total time spent: 14 + 5 + 7, which is 26 hours.

Dividing the time-weighted sum by the total time spent, 1782/26, you’ll get the time-weighted average noise level for that company of workers (68.54 dB).
```

Time-weighted averages can help summarize user behavior, analyze stocks and
trading prices, or measure industrial hygiene, among other use cases.

- **User behavior:** there are several areas in customer or user behavior in
  which the amount of time a user spends on an activity could help provide an
  accurate summary of their activity. For example, recommender systems for
  goods, services, or entertainment should be weighted by the amount of time the
  user spends with the product. Time-weighted averages can also help measure a
  user’s behavior, such as with fitness apps that generate average calories lost
  with weighting for time spent exercising or website analytics dashboards that
  provide time-weighted averages for conversions or engagement.

- **Financial trading and investment:** there are two popular time-weighted
  calculations in this
  sector—[time-weighted average price (TWAP)](https://www.babypips.com/forexpedia/twap)
  and
  [time-weighted rate of return (TWR)](https://www.investopedia.com/terms/t/time-weightedror.asp#toc-what-is-time-weighted-rate-of-return--twr).

The TWAP is a calculated average of the price at the open, close, high, and low
of the market over a set period of time, which is often a more accurate
indicator of the market’s price valuation. The term can also refer to a trading
strategy in which orders are placed over time close to the calculated TWAP to
avoid market volatility.

TWR offers a measure of the compound rate of growth for investment portfolios
that is less distorted by inflows and outflows. It calculates returns by
subperiods that are multiplied together.

- **Industrial hygiene:** time-weighted averages calculate workers’ exposure to
  hazardous materials over their workday. These averages are calculated with the
  concentration levels of the materials and the time workers spend in the area.
  This average is usually checked against standardized industrial health limits
  like those from
  [OSHA](https://www.osha.gov/laws-regs/standardinterpretations/1995-10-06-3).

Time-weighted averages, like weighted averages, factor in values other than the
count and sum of the numbers being averaged in order to provide nuance and
attach subjective importance to calculating averages. While weighted averages
could use percentages or decimals that add up to one as weights, time-weighted
averages use time elapsed or time between data points.

Apart from their usefulness with time series data sets, time-weighted averages
also work well for data points without a set time interval, meaning measured
events that occur sporadically. For example, a data set from an industrial
sensor only sends data when the value being measured changes along with a
timestamp.

You can still utilize the time-weighted average with the time between entries as
the weighting. This method reduces bias due to the frequency of data changes. A
calculated average that doesn’t factor in weightings will be more subject to
periods when the sensor data changes multiple times in a day.

## Using Time-Weighted Averages

You’re going to explore some use cases for time-weighted averages using Python:

### Time-Weighted Average Price (TWAP)

TWAP is used in financial trading and investments to get an accurate record of
the price over a period of time. Use the
[Yahoo! Finance](https://pypi.org/project/yfinance/) Python package to download
Tesla stock history for a specific time period and calculate the time-weighted
average for the stock:

```
# Install the Yahoo! Finance Python package and the required pandas package
!pip install yfinance
!pip install pandas

# Import the required packages
import yfinance as yf
import pandas as pd

# Import stock data for Tesla for the month of January 2022
df = yf.download('TSLA', start="2022-01-01", end="2022-02-01", auto_adjust = True)

# Generate an average price for each trading entry
df["Average per day"] = df[['Open','High','Low','Close']].mean(axis=1)

# Calculate the time-weighted average price for the month
df['Average per day'].mean()
```

![Time-weighted average price for Tesla, January 2022](https://i.imgur.com/R3z2XaE.png)

### Time-Weighted Average

Using synthetic data points, you can generate a time-weighted average of an
irregularly sampled time series. The time elapsed between data points can be
used as weightings:

```
# importing needed packages
import pandas as pd

# Generating the value to be weighted and averaged
df = pd.DataFrame(np.random.randint(0,30,size=(50, 1)), columns=['sample_value'])

# Generating the irregular time series data points
start = pd.to_datetime('2022-01-01')
end = pd.to_datetime('2022-02-01')
np.random.seed(0)

ndays = (end - start).days + 1
time_stamp = pd.to_timedelta(np.random.rand(50) * ndays, unit='D') + start
time_stamp = time_stamp.sort_values(ascending=True)

# Adding the generated data points to our data set
df['time'] = time_stamp

# Calculating the time elapsed between data points
df['time_elapsed'] = df['time'].diff(periods=1)

# Changing the format of the column from timedelta to float
df['time_elapsed'] = df['time_elapsed'] / pd.to_timedelta(1, unit='D')

# Dropping the first entry as the time difference returns a null value
df.dropna(inplace=True)

# Calculating the weighted value
df['weighted_value'] = df['time_elapsed'] * df['sample_value']

# Calculating the time-weighted average
sum(df['weighted_value']) / sum(df['time_elapsed'])

```

![Time-weighted average code result](https://i.imgur.com/pLRgk9e.png)

### Terms to Know

When you’re working with time-weighted averages, you need to be familiar with
continuous aggregates and weighting options.

- **Continuous aggregates:** these are constantly updating values in relation to
  time-weighted averages. You use them to continually calculate your average as
  new data is inputted in real time.

This allows you to incrementally update metrics such as the time-weighted
average without manually rerunning queries or recalculating with the new values
since only the newly updated values need to be calculated.

- **Weighting options:** there are different ways to add weighting for
  time-weighted averages, depending on your data set and its features. Two
  common options are linear weighting and last observation carried forward
  (LOCF).

Linear weighting plots your entries on a straight line, accepting that there is
a difference between entries A and B and that the time elapsed can be used as
the weighting option. This method can be used for time series data without set
intervals for inputs. A common feature of this weighting option is its ability
to weight recent data more, allowing for accurate averages that take into
account seasonality in your data set.

LOCF handles missing data in long-term data sets by using the last valid value
until another value is validated. With sensor data where values don’t linearly
increase but instead remain constant until a change occurs, entries can be
treated as constant until they are changed by the next entry.

## Conclusion

Time-weighted averages help you calculate a more nuanced analysis of time series
data, and they’re a valuable technique to use in finance, retail, education, and
other industries. The information provided here can help you build and improve
your use cases for time-weighted averages.

If you are looking for a home for your time series data with easy access to
functionalities such as time-weighted averages, check out
[QuestDB](https://github.com/questdb/questdb). The open source time series database is
optimized for storing and analyzing time series and event data. It utilizes SQL
with helpful extensions, such as downsampling and unlimited subqueries, to help
you gain real-time insights into your data.
