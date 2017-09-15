---
layout: post
title:  'chapter(2, "startup strategies, sorta")'
date:   2017-05-10 16:34:00 -0700
categories: 
- bitbybit
- startups 
- kafka 
- philosophy 
- datastreams 
- infrastructure
---

`Yun` Are you sure that's a good idea?

`August` I think it is. Why do you ask?

`Yun` Because adding new infrastructure this late in the development process is just going to add technical debt.

`August` But we want to use Kafka to eliminate technical debt.

`Yun` It's possible that it will just add more, though.

`August` Sure, but don't we want to be able to scale? Having a data stream will allow us to leverage more data platforms easier.

`Yun` But it's something we haven't done before. It's new. It's big. Our Cloud team doesn't want to manage something like that.

`August` I see what you're saying... but once it's set up then it's mostly just creating Stream Processors, which is basically what we do as developers anyway...

`Yun` What if those stream processors break down in production?

`August` Typical development process. It's just a microservice at the end of the day.

`Yun` Well... okay, you're right. Still, I think the time it takes to launch something like Kafka is a few months at least. On top of that, no one knows it...

`August` ... And our developers will have to get pulled away from critical features to implement it.

`Yun` Right.

`August` Right.

`Yun` Hmmm... but what if we try something more lightweight than Kafka? We can just update our Nginx load balancers to send requests messages to RabbitMQ, and slowly migrate our microservices to consume from the queue instead of receive API requests directly.

`August` Or both.

`Yun` Yea.

`August` I think that's a fair compromise, but as we've been having this discussion I've actually realized we're solving for the wrong problem after all.

`Yun` Wait, what?

`August` Yep. I realize now that we don't even know what our technical debt is. I've been treating our current code base like something we need to burn with fire. In actuality, we should embrace it, and ultimately do surgery from within.

`Yun` Like changing out the transmission in a moving car?

`August` Well said.

