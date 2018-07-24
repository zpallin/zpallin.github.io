---
layout: post
title:  'chapter(3, "something something navigation")'
date:   2018-07-24 12:38:00 -0700
categories:
- bitbybit
- software
- devops
- kubernetes
- docker
---

`Yun` It's actually a steering wheel.

`Sherman` Whatever.

`Yun` You know about August's plans to move our platform to it, right?

`Sherman` Yea I know... I really don't get her obsession with Kubernetes. This is just going to end in disaster like the Kafka project.

`Yun` Well August is looking for a major infrastructure change.

`Sherman` Come on. That's not really an answer.

`Yun` Well, it comes down to introducing microservices. August thinks that microservices will introduce more team isolation and help improve time-to-market. Kubernetes is the most prolific platform offering this capability, and other companies are hopping aboard enthusiastically.

`Sherman` This is what makes me most upset. Why are we talking about changing our infrastructure? Our engineers need to stick their nose in the code and pull their head out of the clouds.

`Yun` Pun intended?

`Sherman` No.

`Yun` I think you're taking this too personally, Sherman.

`Sherman` Also, no. I like August and the way she manages the team. I just think she's falling into the same trap every new director has: implement the new thing, figure out it doesn't work, turn around and implement another new thing, figure out that doesn't work...

`Yun` ... And then everything is a mess.

`Sherman` Precisely. And I can't stand it. The last quarter we barely got anything done because we were stuck working through bugs.

`Yun` That's exactly what August said to me earlier. She knows we're stuck refactoring and the site is unstable, but the microservices architecture plans have been on the drawing board for year. Now she's finally ready to take it to task.

`Sherman` But that's the problem, Yun. You don't see it! We're only adopting this plan now because everything is a mess. And we don't need Kubernetes to do microservices, anyway! This is a trend that will die in a few months anyway.

`Yun` <i>You</i> of all people should know how long it takes to turn the ship around once you've made a business decision like adopting Kubernetes. You're wrong and you need to chill out, Sherman.

`Sherman` Hahaha. Yun, you're funny, you know that? Not everyone at this company has the guts to tell me to chill out.

`Yun` I also have the guts to tell you to give August's plan more consideration.

`Sherman` Okay. I'll do it. I owe her one anyway. So what's the plan?

`Yun` Right now we have our three core applications running in the same image in AWS. We build it into an AMI and deploy into Elastic Beanstalk. We're going to switch the process so the three core applications are split into <i>seven</i>. Then, we dockerize each of them. Once dockerized, the Cloud team should have already set up our Kubernetes cluster. We should be able to do it by the following release. Then we begin working on continuous deployment.

`Sherman` I may have some suggestions. Invite me to the next steering committee.

`Yun` Pun intended?

`Sherman` Yes.
