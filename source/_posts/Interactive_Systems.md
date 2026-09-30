---
title: Interactive Systems
date: 2022-04-15 12:52:27
tags: 【System】
cover: https://raw.githubusercontent.com/MaggieRuyi/MaggieRuyi.github.io/src/image/interactive.jpeg
title_zh: 交互式系统
description: "An introduction to distributed systems and a simple two-person, turn-based chat system built on a shared server."
description_zh: "介绍分布式系统的基本概念，并基于共享服务器实现一个简单的双人轮流聊天系统。"
---
<div class="lang-en">

# Interactive Systems
---
## "What is an interactive system?"
A distributed system is a system whose components are located on different networked computers that communicate and coordinate their actions by passing information from any system to each other. The components interact with each other to achieve a common goal.
Distributed systems allow for the sharing of resources, including software shared by systems connected to the network. Examples of distributed systems/applications of distributed computing: intranet, internet, WWW, e-mail. Telecommunication networks. Telephone networks and cellular networks.

## "Make a simple distributed system."
- **Program Design**:
1. only one pair of people can use this chat system
2. the first person to open the system is client1st and the second person to open the system is client2nd.
3. each person can only type one message at a time, and then they must wait for the other person to reply.
4. while one person is typing, the other person must wait.
5. type end to end the program.
- **Cautions for using this program**:
1. the same string cannot be entered consecutively by one person or it will be considered as no input. It is regarded as no input.
2. line breaks cannot be entered
3. both people must type 'end' to end the chat.
- **Structural Framework**:
1. the length of the key in the server is used to determine if it is the first member because if the length is 1, the server is empty, then no one has opened the chat and typed in a message before, then the member is client1st.
2. it is then necessary to determine if the user wants to chat, i.e. to determine if "end" has been entered.
3. the first input needs to be presented in a separate category with a welcome message in it to remind the user if it is client1st or client2nd. so there are two ways to determine if it is the first input and read it, the first is to directly determine message1 and message2 the second is to determine if the keys in the server are the same as the message (note that the key value taken from the server (Note that the string taken from the server will have an extra '\n' after decoding, so it can't be judged directly, and '\n' should be added to judge it.
4. After that, we need to clarify the representation and judgment of two states, one is input and the other is waiting.
    In the waiting state , because the other member does not have any input, at this time the server corresponds to the value of the other party's message and the value of the message itself, so it can be used to determine whether it is in the waiting state.
    In the wait state, all we need to do is wait, so I set up a sleep three-second refresh to wait for input from the other member.
    In the input state, we need to refresh the value of the message and then update the corresponding value on the server based on the new input.
5. when ending the chat by typing 'end', the server needs to be cleared for the next time.
![](https://raw.githubusercontent.com/MaggieRuyi/MaggieRuyi.github.io/src/image/comp.jpeg)

</div>
<div class="lang-zh">

# 交互式系统
---
## “什么是交互式系统？”
分布式系统是指其组件分布在不同联网计算机上的系统，这些组件通过相互传递信息来进行通信并协调各自的行为，彼此交互以实现共同的目标。
分布式系统支持资源共享，包括由接入网络的各个系统共享的软件。分布式系统 / 分布式计算应用的例子有：内联网、互联网、万维网（WWW）、电子邮件、电信网络、电话网络以及蜂窝网络。

## “实现一个简单的分布式系统”
- **程序设计**：
1. 该聊天系统只能供一对用户使用。
2. 第一个打开系统的人为 client1st，第二个打开系统的人为 client2nd。
3. 每人每次只能输入一条消息，之后必须等待对方回复。
4. 当一方正在输入时，另一方必须等待。
5. 输入 end 即可结束程序。
- **使用注意事项**：
1. 同一个人不能连续输入相同的字符串，否则会被视为没有输入。
2. 不能输入换行符。
3. 双方都必须输入 'end' 才能结束聊天。
- **结构框架**：
1. 通过服务器中 key 的长度来判断是否为第一位成员：如果长度为 1，说明服务器为空，此前没有人打开聊天并输入过消息，那么该成员就是 client1st。
2. 接着需要判断用户是否还要继续聊天，即判断是否输入了 "end"。
3. 第一次输入需要单独处理，并在其中加入欢迎信息，提示用户自己是 client1st 还是 client2nd。判断是否为第一次输入并读取它有两种方式：第一种是直接判断 message1 和 message2；第二种是判断服务器中的 key 是否与 message 相同（注意，从服务器取出的字符串在解码后会多出一个 '\n'，因此不能直接比较，需要先补上 '\n' 再进行判断）。
4. 之后需要明确两种状态的表示与判断：一种是输入状态，另一种是等待状态。
    在等待状态下，由于对方还没有任何输入，此时服务器中对方消息对应的值与自己消息的值相同，因此可以据此判断是否处于等待状态。
    在等待状态下只需等待即可，所以我设置了每隔三秒 sleep 一次并刷新，以等待另一位成员的输入。
    在输入状态下，需要刷新消息的值，然后根据新的输入更新服务器上对应的值。
5. 当输入 'end' 结束聊天时，需要清空服务器，以便下次使用。
![](https://raw.githubusercontent.com/MaggieRuyi/MaggieRuyi.github.io/src/image/comp.jpeg)

</div>
