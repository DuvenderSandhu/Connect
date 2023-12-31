import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actionCreators from '../state'
import io from 'socket.io-client';

const socket = io();


function Chat() {
  const inputRef = useRef(null);
  const user = useSelector(state => state.token)
  const chatuser = useSelector(state => state.chatuser)
  const [fullMode, setFullMode] = useState(0)
  const [response, setResponse] = useState([])
  const dispatch = useDispatch()
  const users = ['Rahul Sharma', "Anita Kapoor", "Sunita Suri", 'Rahul Sharma', "Anita Kapoor", "Sunita Suri"]
useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to the server via Socket.io');
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from the server via Socket.io');
    });

    // You can now listen for custom events or send data to the server
    socket.on('customEvent', (data) => {
      console.log('Received data from server:', data);
    });

    // Clean up the socket connection when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);
  return (
    <>
      {/* <!-- component --> */}
      <div class="flex h-screen antialiased text-gray-800">
        <div class="flex flex-row h-full w-full overflow-x-hidden">
          <div class={`flex flex-col transition-allt py-8 pl-6 pr-2 bg-white flex-shrink-0 ${fullMode === 0 ? "hidden" : "w-64"}`}>
            <div class="flex flex-row items-center justify-center h-10 w-full">
              <div
                class="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10"
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  ></path>
                </svg>
              </div>
              <div class="ml-2 font-bold text-2xl">Connect</div>
            </div>
            <div
              class="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg"
            >
              <div class="h-20 w-20 rounded-full border overflow-hidden">
                <img width="100" height="100" src="https://img.icons8.com/ios-filled/100/000000/user-male-circle.png" alt="user-male-circle" />
              </div>
              <div class="text-sm font-semibold mt-2">{user.name}</div>

            </div>
            <div class="flex flex-col mt-8">
              <div class="flex flex-row items-center justify-between text-xs">
                <span class="font-bold">Active Conversations</span>
                <span
                  class="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full"
                >4</span
                >
              </div>
              <div class="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">

                {users.map((e) => {
                  return (
                    <>
                      <button
                        class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
                        onClick={() => {
                          dispatch(actionCreators.chatUser(e))
                        }} >
                        <div
                          class="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full"
                        >
                          {e[0]}
                        </div>
                        <div class="ml-2 text-sm font-semibold" >{e}</div>
                      </button>
                    </>
                  )
                })}
              </div>
            </div>

          </div>
          <div class="flex flex-col flex-auto h-full p-6">
            <button class="bg-transparent mt-8 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 z-index hover:border-transparent rounded" onClick={() => {
              setFullMode(fullMode === 0 ? 1 : 0)
            }}>
              Chat in Full Mode
            </button>
            <div class="text-sm font-semibold mt-2">{chatuser}</div>

            <div
              class="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-[70vh] p-4"
            >
              <div class="flex flex-col h-[50vh] overflow-x-auto mb-4">
                <div class="flex flex-col h-[10vh]">
                  <div class="grid grid-cols-12 gap-y-2">
                    <div class="col-start-1 col-end-8 p-3 rounded-lg">
                      <div class="flex flex-row items-center">
                        <div
                          class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                        >
                          A
                        </div>
                        <div
                          class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                        >
                          <div>Hey How are you today?</div>
                        </div>
                      </div>
                    </div>
                    <div class="col-start-1 col-end-8 p-3 rounded-lg">
                      <div class="flex flex-row items-center">
                        <div
                          class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                        >
                          A
                        </div>
                        <div
                          class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                        >
                          <div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Vel ipsa commodi illum saepe numquam maxime
                            asperiores voluptate sit, minima perspiciatis.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-start-6 col-end-13 p-3 rounded-lg">
                      <div class="flex items-center justify-start flex-row-reverse">
                        <div
                          class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                        >
                          A
                        </div>
                        <div
                          class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                        >
                          <div>I'm ok what about you?</div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div
                class="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4"
              >
                <div>
                  <button
                    class="flex items-center justify-center text-gray-400 hover:text-gray-600"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div class="flex-grow ml-4">
                  <div class="relative w-full">
                    <input ref={inputRef}
                      type="text"
                      class="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                    />
                    <button
                      class="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600"
                    >
                      <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="ml-4">
                  <button
                    class="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                    onClick={() => {
                      console.log("HI")
                    }}>
                    <span>Send</span>
                    <span class="ml-2">
                      <svg
                        class="w-4 h-4 transform rotate-45 -mt-px"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Chat