---
title: Interactive Systems
date: 2022-04-15 12:52:27
tags: 【System】
cover: https://raw.githubusercontent.com/MaggieRuyi/MaggieRuyi.github.io/src/image/interactive.jpeg
--- - - - - - - - - - - - - - - - - - - - - - -
# Interactive Systems
---
## "What is an interactive system?"
A distributed system is a system whose components are located on different networked computers that communicate and coordinate their actions by passing information from any system to each other. The components interact with each other to achieve a common goal.
Distributed systems allow for the sharing of resources, including software shared by systems connected to the network. Examples of distributed systems/applications of distributed computing: intranet, internet, WWW, e-mail. Telecommunication networks. Telephone networks and cellular networks.

## "Make a simple distributed system."
- **Program Design**:
1. only one pair of people can use this chat system
2. the first person to open the system is client1st and the second person to open the system is clent2nd.
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
! [](https://raw.githubusercontent.com/MaggieRuyi/MaggieRuyi.github.io/src/image/comp.jpeg)