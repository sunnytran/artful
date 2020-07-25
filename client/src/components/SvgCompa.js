

import React, { Component } from 'react';

var SvgCompa = function SvgCompa(props) {
    return (
    <svg width={1013.333} height={1125.333} viewBox="0 0 760 844" {...props}>
    <path d="M0 422v422h760V0H0v422zM42 17v12H5V5h37v12zm46-1v11H46V5h42v11zm51 0v11H89V5h50v11zm72 0v11h-71V5h71v11zm75 0v11h-74V5h74v11zm61 1v12h-57V5h57v12zm67.8-.3l-.3 11.8h-66l-.3-11.8-.3-11.7h67.2l-.3 11.7zm66.2.3v12h-65V5h65v12zm45.8-.3l-.3 11.8-20.7.3-20.8.2V5h42.1l-.3 11.7zm72.2.3v12h-71V5h71v12zm66 0v12l-32.2-.2-32.3-.3-.3-11.8-.3-11.7H665v12zm56 0v12h-52V5h52v12zm34 0v12l-16.2-.2-16.3-.3-.3-8.5c-.2-4.7 0-10 .3-11.8l.6-3.2H755v12zM42 45v15H5V30h37v15zm305 0v15h-57V30h57v15zm68 0v15h-67V30h67v15zm66 0v15h-65V30h65v15zm46 0v15h-42V30h42v15zm72 0v15h-71V30h71v15zm66 0v15h-65V30h65v15zm56 0v15h-52V30h52v15zm34 0v15h-33V30h33v15zm-667 .5V60H46V31h42v14.5zm49 0V60H89V31h48v14.5zm73.8.2l.3 14.3H141V31l34.8.2 34.7.3.3 14.2zm75.2-.2V60h-74V31h74v14.5zM42 91v30H5V61h37v30zm46 0v30H46V61h42v30zm49 0v30H89V61h48v30zm73.8.2l.2 29.8h-70V61l34.8.2 34.7.3.3 29.7zM286 91v30h-74V61h74v30zm61-1v29h-57V61h57v29zm67.8.2l.2 28.8h-67V90.7c0-15.6.3-28.7.7-29 .4-.4 15.3-.6 33.2-.5l32.6.3.3 28.7zM481 90v29h-65V61h65v29zm45.8.2l.2 28.8h-42V61l20.8.2 20.7.3.3 28.7zM599 90v29h-71V61h71v29zm66 0v29h-65V90.7c0-15.6.3-28.7.7-29 .3-.4 15-.7 32.5-.7H665v29zm56 1v30h-52V61h52v30zm34 0v30h-33V91.7c0-16.2.3-29.7.7-30 .3-.4 7.8-.7 16.5-.7H755v30zM42 158v35H5v-70h37v35zm46 0v35H46v-70h42v35zm49 0v35H89v-70h48v35zm73.8-.3l-.3 34.8-34.7.3-34.8.2v-70h70l-.2 34.7zm75.2.3v35h-74v-70h74v35zm61 0v35h-57v-70h57v35zm67.5 0v34.5h-66l-.3-33.5c-.1-18.4 0-34.1.3-34.8.3-1 7.4-1.2 33.2-1l32.8.3V158zm66.5 0v35h-65v-70h65v35zm45.5 0v34.5l-20.7.3-20.8.2v-70l20.8.2 20.7.3V158zm72.5 0v35h-71v-70h71v35zm66 0v35l-32.2-.2-32.3-.3-.3-33.5c-.1-18.4 0-34.1.3-34.7.3-1 7.7-1.3 32.5-1.3h32v35zm56 0v35h-52v-70h52v35zm34 0v35l-16.2-.2-16.3-.3-.3-34.8-.2-34.7h33v35zM42 218.5V240H5v-43h37v21.5zm46 0V240H46v-43h42v21.5zm51 0V240H89v-43h50v21.5zm72 0V240h-71v-43h71v21.5zm75 0V240h-74v-43h74v21.5zm61 0V240h-57v-43h57v21.5zm68 0V240h-67v-43h67v21.5zm66 0V240h-65v-43h65v21.5zm46 0V240h-42v-43h42v21.5zm72 0V240h-71v-43h71v21.5zm66 0V240h-65v-43h65v21.5zm55 0V240h-51v-43h51v21.5zm35 0V240h-31v-43h31v21.5zM42 282v41H5v-82h37v41zm46 0v41H46v-82h42v41zm50.8.2l.2 40.8H89v-82l24.8.2 24.7.3.3 40.7zm72 0l.2 40.8h-71v-82l35.3.2 35.2.3.3 40.7zm75.2-.2v41h-74v-82h74v41zm61 0v41h-57v-82h57v41zm67.8.2l.2 40.8h-67v-40.3c0-22.2.3-40.7.7-41 .4-.4 15.3-.6 33.2-.5l32.6.3.3 40.7zm66.2-.2v41h-65v-82h65v41zm45.8.2l.2 40.8h-42v-82l20.8.2 20.7.3.3 40.7zm72.2-.2v41h-71v-82h71v41zm66 0v41h-65v-40.3c0-22.2.3-40.7.7-41 .3-.4 15-.7 32.5-.7H665v41zm55 0v41h-51v-82h51v41zm35 0v41h-31v-82h31v41zM42 353v28H5v-56h37v28zm46-1v27H46v-54h42v27zm51 0v27H89v-54h50v27zm72 0v27h-71v-54h71v27zm75 0v27h-74v-54h74v27zm61 0v27h-57v-54h57v27zm68 0v27h-67v-54h67v27zm66 0v27h-65v-54h65v27zm46 0v27h-42v-54h42v27zm72 0v27h-71v-54h71v27zm66 0v27h-65v-54h65v27zm55 1v28h-51v-56h51v28zm35 0v28h-31v-56h31v28zM42 403.5V425H5v-43h37v21.5zm677.8.2l.2 21.3h-51v-43l25.3.2 25.2.3.3 21.2zm35.2-.2V425h-31v-43h31v21.5zM88 404v21H46v-42h42v21zm50.8.2l.2 20.8H89v-42l24.8.2 24.7.3.3 20.7zm72 0l.2 20.8h-71v-42l35.3.2 35.2.3.3 20.7zm75.2-.2v21h-74v-42h74v21zm61 0v21h-57v-42h57v21zm67.8.2l.2 20.8h-67v-20.3c0-11.2.3-20.7.7-21 .4-.4 15.3-.6 33.2-.5l32.6.3.3 20.7zm66.2-.2v21h-65v-42h65v21zm45.8.2l.2 20.8h-42v-42l20.8.2 20.7.3.3 20.7zm72.2-.2v21h-71v-42h71v21zm66 0v21h-65v-20.3c0-11.2.3-20.7.7-21 .3-.4 15-.7 32.5-.7H665v21zM42 456v29H5v-58h37v29zm46 0v29H46v-58h42v29zm51 0v29H89v-58h50v29zm72 0v29h-71v-58h71v29zm75 0v29h-74v-58h74v29zm61 0v29h-57v-58h57v29zm68 0v29h-67v-58h67v29zm66 0v29h-65v-58h65v29zm46 0v29h-42v-58h42v29zm72 0v29h-71v-58h71v29zm66 0v29h-65v-58h65v29zm55 0v29h-51v-58h51v29zm35 0v29h-31v-58h31v29zM42 509v22H5v-44h37v22zm46 0v22H46v-44h42v22zm51 0v22H89v-44h50v22zm72 0v22h-71v-44h71v22zm75 0v22h-74v-44h74v22zm61 0v22h-57v-44h57v22zm68 0v22h-67v-44h67v22zm66 0v22h-65v-44h65v22zm45.8.7l-.3 22.8-20.7.3-20.8.2v-46h42l-.2 22.7zm72.2.3v23h-71v-46h71v23zm66 0v23l-32.2-.2-32.3-.3-.3-22.8-.2-22.7h65v23zm54.8-.3l-.3 22.8-25.2.3-25.3.2v-46h51l-.2 22.7zm35 0l-.3 22.8-15.2.3-15.3.3V487h31l-.2 22.7zM527 566.5V599h-42v-65h42v32.5zm72 0V599h-71v-65h71v32.5zm66 0V599h-65v-65h65v32.5zm55 0V599h-51v-65h51v32.5zm35 0V599h-31v-65h31v32.5zM43 567v32H5v-64h38v32zm45 0v32H45v-64h43v32zm49 0v32H89v-64h48v32zm73.8.2l.2 31.8h-70v-64l34.8.2 34.7.3.3 31.7zm75.2-.2v32h-74v-64h74v32zm61 0v32h-57v-64h57v32zm67.8.2l.2 31.8h-67v-31.3c0-17.3.3-31.7.7-32 .4-.4 15.3-.6 33.2-.5l32.6.3.3 31.7zm66.2-.2v32h-65v-64h65v32zM43 634v33H5v-66h38v33zm45 0v33H45v-66h43v33zm49 0v33H89v-66h48v33zm74 0v33h-70v-66h70v33zm75 0v33h-74v-66h74v33zm61-.5V666h-57v-65h57v32.5zm68 0V666h-67v-65h67v32.5zm66 0V666h-65v-65h65v32.5zm46 0V666h-42v-65h42v32.5zm72 0V666h-71v-65h71v32.5zm66 0V666h-65v-65h65v32.5zm55 0V666h-51v-65h51v32.5zm35 0V666h-31v-65h31v32.5zM43 698v29H5v-58h38v29zm45 0v29H45v-58h43v29zm49 0v29H89v-58h48v29zm73.8.7l-.3 29.8-34.7.3-34.8.2v-60h70l-.2 29.7zm75.2.3v30h-74v-60h74v30zm61 .5V729h-57v-59h57v29.5zm67.8-.3l-.3 29.3h-66l-.3-29.3-.2-29.2h67l-.2 29.2zm66.2.3V729h-65v-59h65v29.5zm45.8-.3l-.3 29.3-20.7.3-20.8.2v-59h42l-.2 29.2zm72.2.3V729h-71v-59h71v29.5zm66 0V729l-32.2-.2-32.3-.3-.3-29.3-.2-29.2h65v29.5zm56 0V729h-52v-59h52v29.5zm34 0V729l-16.2-.2-16.3-.3-.3-29.3-.2-29.2h33v29.5zm-544 61V791h-70v-61h70v30.5zm75 0V791h-74v-61h74v30.5zm61 0V791h-57v-61h57v30.5zm68 0V791h-67v-61h67v30.5zm66 0V791h-65v-61h65v30.5zm46 0V791h-42v-61h42v30.5zm72 0V791h-71v-61h71v30.5zm66 0V791h-65v-61h65v30.5zm56 1V793h-52v-63h52v31.5zm34 0V793l-16.2-.2-16.3-.3-.3-31.3-.2-31.2h33v31.5zM43 762v31H5v-62h38v31zm45 0v31H45v-62h43v31zm49 0v31H89v-62h48v31zm-94 54.5V839H5v-45h38v22.5zm45 0V839H45v-45h43v22.5zm49 0V839H89v-45h48v22.5zm584 0V839h-52v-45h52v22.5zm34 0V839h-33v-45h33v22.5zm-544.2.7l.2 21.8h-70v-44l34.8.2 34.7.3.3 21.7zm76.2-.2v22h-75v-44h75v22zm60 0v22h-59v-21.3c0-11.8.3-21.7.7-22 .3-.4 13.6-.7 29.5-.7H347v22zm67.8.2l.2 21.8h-67v-21.3c0-11.8.3-21.7.7-22 .4-.4 15.3-.6 33.2-.5l32.6.3.3 21.7zm66.2-.2v22h-65v-44h65v22zm45.8.2l.2 21.8h-42v-44l20.8.2 20.7.3.3 21.7zm72.2-.2v22h-71v-44h71v22zm66 0v22h-65v-21.3c0-11.8.3-21.7.7-22 .3-.4 15-.7 32.5-.7H665v22z" />
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M5.063 17.005V5.013H41.93v23.984H5.063z" fill="#ffffff" />
    <text
        y={20.666}
        x={20.156}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={20.666} x={20.156}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M46.012 15.984V5.014H87.983V26.954H46.012z" fill="#ffffff" />
    <text
        y={16.967}
        x={64.295}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={16.967} x={64.295}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M89.003 15.984V5.014h50.008V26.954H89.003z" fill="#ffffff" />
    <text
        y={18.498}
        x={111.113}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={18.498} x={111.113}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M139.989 15.984V5.014h71.056V26.954h-71.056z" fill="#ffffff" />
    <text
        y={19.263}
        x={171.071}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={19.263} x={171.071}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M211.98 15.984V5.014h73.991V26.954H211.98z" fill="#ffffff" />
    <text
        y={19.135}
        x={242.51}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={19.135} x={242.51}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M290.053 17.005V5.013h56.896v23.984h-56.896z" fill="#ffffff" />
    <text
        y={20.921}
        x={315.224}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={20.921} x={315.224}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M348.47 26.222c-.044-1.245-.164-5.766-.265-10.046-.102-4.28-.217-8.543-.256-9.472l-.071-1.69h67.245l-.072 1.626c-.04.895-.155 5.186-.257 9.536-.101 4.35-.22 8.9-.265 10.11l-.08 2.2H348.551z"
        fill="#ffffff"
    />
    <text
        y={20.794}
        x={375.947}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={20.794} x={375.947}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M416.05 17.005V5.013h64.932v23.984H416.049z" fill="#ffffff" />
    <text
        y={19.646}
        x={445.345}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={19.646} x={445.345}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M484.98 17.012V5.013H527.114l-.08 2.201c-.044 1.21-.17 6.133-.279 10.94-.11 4.805-.229 9.089-.266 9.518l-.067.78-4.234.083c-3.862.076-13.235.198-30.672.4l-6.538.076z"
        fill="#ffffff"
    />
    <text
        y={19.391}
        x={502.369}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={19.391} x={502.369}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M528.055 17.005V5.013h70.929v23.984h-70.929z" fill="#ffffff" />
    <text
        y={19.646}
        x={559.903}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={19.646} x={559.903}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M650.756 28.906c-11.7-.054-50.122-.428-50.183-.489-.047-.047-.623-20.303-.648-22.798l-.006-.606h65.06v23.984l-3.986-.031c-2.192-.017-6.8-.044-10.237-.06z"
        fill="#ffffff"
    />
    <text
        y={19.773}
        x={628.152}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={19.773} x={628.152}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M668.977 17.005V5.013h52.048v23.984h-52.048z" fill="#ffffff" />
    <text
        y={19.773}
        x={690.789}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={19.773} x={690.789}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M747.815 28.907c-6.246-.061-25.183-.43-25.244-.49-.118-.119-.381-8.655-.386-12.496-.005-4.59.12-6.527.58-9.026l.346-1.882h31.848v23.984l-2.01-.03c-1.104-.016-3.415-.043-5.134-.06z"
        fill="#ffffff"
    />
    <text
        y={19.135}
        x={734.29}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={19.135} x={734.29}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M4.976 45.005V30.031H41.96V59.98H4.976z" fill="#ffffff" />
    <text
        y={47.989}
        x={20.206}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={47.989} x={20.206}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M46.05 45.501V31.024h41.945v28.955H46.05z" fill="#ffffff" />
    <text
        y={47.899}
        x={63.685}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={47.899} x={63.685}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M89.018 45.501V31.024H137.007v28.955H89.018z" fill="#ffffff" />
    <text
        y={48.44}
        x={109.87}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={48.44} x={109.87}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M141.006 45.501V31.024h2.638c7.65.003 66.744.45 66.81.506.025.021.57 24.13.638 28.246l.004.203h-70.09z"
        fill="#ffffff"
    />
    <text
        y={48.801}
        x={171.3}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={48.801} x={171.3}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M211.997 45.501V31.024h73.969v28.955h-73.969z" fill="#ffffff" />
    <text
        y={47.628}
        x={244.907}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={47.628} x={244.907}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M289.995 45.005V30.031h57.01V59.98h-57.01z" fill="#ffffff" />
    <text
        y={46.997}
        x={316.801}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={46.997} x={316.801}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M347.997 45.005V30.031h67.022V59.98H347.997z" fill="#ffffff" />
    <text
        y={47.177}
        x={378.05}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={47.177} x={378.05}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M416.012 45.005V30.031h64.947V59.98h-64.947z" fill="#ffffff" />
    <text
        y={46.456}
        x={444.441}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={46.456} x={444.441}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M484.989 45.005V30.031h42.035V59.98H484.99z" fill="#ffffff" />
    <text
        y={46.185}
        x={503.436}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={46.185} x={503.436}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M528.017 45.005V30.031h70.991V59.98h-70.991z" fill="#ffffff" />
    <text
        y={47.989}
        x={562.069}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={47.989} x={562.069}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M599.97 45.005V30.031H665.008V59.98H599.97z" fill="#ffffff" />
    <text
        y={48.801}
        x={629.813}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={48.801} x={629.813}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M668.977 45.005V30.031h52.049V59.98h-52.049z" fill="#ffffff" />
    <text
        y={48.26}
        x={690.07}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={48.26} x={690.07}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M722.018 45.005V30.031h33.015V59.98h-33.015z" fill="#ffffff" />
    <text
        y={48.711}
        x={736.255}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={48.711} x={736.255}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M5.057 120.89c-.066-.067-.12-13.543-.12-29.949V61.114H41.92v59.896H23.549c-10.105 0-18.426-.054-18.492-.12z"
        fill="#ffffff"
    />
    <text
        y={95.257}
        x={20.567}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={95.257} x={20.567}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M46.07 91.062V61.114H87.925v59.896H46.07z" fill="#ffffff" />
    <text
        y={95.618}
        x={63.865}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={95.618} x={63.865}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M88.948 91.062V61.114H136.937v59.896H88.948z" fill="#ffffff" />
    <text
        y={95.257}
        x={108.788}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={95.257} x={108.788}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M140.966 91.062V61.114l10.329-.003c11.395-.003 59 .372 59.105.466.075.067.298 20.307.482 43.602l.124 15.83h-70.04z"
        fill="#ffffff"
    />
    <text
        y={93.272}
        x={171.21}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={93.272} x={171.21}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M212.048 91.062V61.114h73.968v59.896h-73.968z" fill="#ffffff" />
    <text
        y={93.994}
        x={244.998}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={93.994} x={244.998}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M290.106 90.07V61.113h56.829v57.911h-56.829z" fill="#ffffff" />
    <text
        y={93.272}
        x={313.734}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={93.272} x={313.734}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M348.078 97.331c.001-20.05.181-32.472.503-34.681.128-.874.152-.903.851-1.04 1.452-.282 20.42-.403 42.382-.27 12.396.076 22.561.162 22.59.19.053.053.309 23.091.513 45.994l.102 11.501h-66.941z"
        fill="#ffffff"
    />
    <text
        y={92.19}
        x={375.254}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={92.19} x={375.254}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M415.972 90.07V61.113h64.948v57.911h-64.948z" fill="#ffffff" />
    <text
        y={89.484}
        x={445.434}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={89.484} x={445.434}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M485.07 90.04V61.057l15.109.145c8.31.08 17.626.194 20.702.254l5.592.11.11 10.193c.06 5.606.174 18.535.252 28.73l.142 18.537h-41.908z"
        fill="#ffffff"
    />
    <text
        y={91.649}
        x={502.624}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={91.649} x={502.624}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M528.007 90.07V61.113H598.908v57.911H528.007z" fill="#ffffff" />
    <text
        y={90.205}
        x={559.994}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={90.205} x={559.994}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M600.048 94.625c.094-21.61.273-31.66.582-32.633.065-.206.373-.341.946-.415 2.394-.31 14.554-.458 37.7-.46l25.663-.003v57.911h-64.996z"
        fill="#ffffff"
    />
    <text
        y={90.025}
        x={630.715}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={90.025} x={630.715}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M669.088 91.062V61.114h51.958v59.896h-51.958z" fill="#ffffff" />
    <text
        y={95.437}
        x={693.137}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={95.437} x={693.137}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M722.006 96.79c.105-21.89.286-32.583.585-34.447.086-.538.2-.685.589-.767 1.478-.31 7.672-.461 19.02-.462h12.763v59.896h-33.072z"
        fill="#ffffff"
    />
    <text
        y={95.076}
        x={737.158}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={95.076} x={737.158}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M5.082 157.949v-34.954H42.077v69.908H5.082z" fill="#ffffff" />
    <text
        y={159.972}
        x={19.135}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={159.972} x={19.135}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M46.159 157.949v-34.954h41.843v69.908H46.159z" fill="#ffffff" />
    <text
        y={160.482}
        x={63.274}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={160.482} x={63.274}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M89.022 157.949v-34.954h47.967v69.908H89.022z" fill="#ffffff" />
    <text
        y={159.972}
        x={110.73}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={159.972} x={110.73}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M141.156 157.987v-34.992h69.874l-.114 9.759c-.063 5.367-.184 20.966-.27 34.663l-.154 24.904-5.518.162c-3.036.088-18.636.237-34.669.329l-29.15.168z"
        fill="#ffffff"
    />
    <text
        y={161.248}
        x={168.392}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={161.248} x={168.392}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M211.914 157.949v-34.954h73.991v69.908h-73.991z" fill="#ffffff" />
    <text
        y={160.227}
        x={244.678}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={160.227} x={244.678}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M289.987 157.949v-34.954h56.896v69.908h-56.896z" fill="#ffffff" />
    <text
        y={157.676}
        x={316.117}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={157.676} x={316.117}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M348.287 165.248c-.2-28.643-.052-40.767.506-41.23.175-.145 1.454-.375 2.84-.51 2.922-.284 31.386-.335 50.041-.089l12.82.17v68.804h-66.017z"
        fill="#ffffff"
    />
    <text
        y={160.738}
        x={370.207}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={160.738} x={370.207}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M416.026 157.949v-34.954h65.06v69.908h-65.06z" fill="#ffffff" />
    <text
        y={160.738}
        x={443.687}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={160.738} x={443.687}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M485.083 157.96v-35.018l9.76.154c5.367.085 14.667.225 20.666.312l10.907.157V192.323l-3.126.16c-1.719.088-11.018.235-20.666.328l-17.54.168z"
        fill="#ffffff"
    />
    <text
        y={159.462}
        x={497.521}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={159.462} x={497.521}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M528.032 157.949v-34.954h70.928v69.908h-70.928z" fill="#ffffff" />
    <text
        y={160.482}
        x={557.479}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={160.482} x={557.479}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M617.573 192.653c-9.292-.087-16.944-.21-17.005-.273-.21-.22-.421-58.577-.228-63.39l.194-4.847 1.275-.32c2.16-.54 15.68-.819 39.993-.824l23.154-.004v69.908l-15.244-.046c-8.385-.026-22.847-.118-32.14-.204z"
        fill="#ffffff"
    />
    <text
        y={160.227}
        x={626.622}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={160.227} x={626.622}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M669.039 157.949v-34.954h52.048v69.908h-52.048z" fill="#ffffff" />
    <text
        y={158.952}
        x={691.937}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={158.952} x={691.937}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M731.24 192.656c-4.59-.085-8.427-.238-8.527-.339-.209-.208-.561-33.123-.588-54.843l-.018-14.48h32.913V192.904l-7.718-.046c-4.244-.025-11.472-.115-16.062-.2z"
        fill="#ffffff"
    />
    <text
        y={159.972}
        x={739.903}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={159.972} x={739.903}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M4.98 218.497V197.03H41.963v42.938H4.979z" fill="#ffffff" />
    <text
        y={224.07}
        x={19.304}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={224.07} x={19.304}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M46.113 218.497V197.03H87.968v42.938H46.113z" fill="#ffffff" />
    <text
        y={221.364}
        x={62.783}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={221.364} x={62.783}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M89.05 218.497V197.03H139.025v42.938H89.051z" fill="#ffffff" />
    <text
        y={221.364}
        x={111.855}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={221.364} x={111.855}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M140.107 218.497V197.03H211.008v42.938H140.107z" fill="#ffffff" />
    <text
        y={222.807}
        x={170.488}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={222.807} x={170.488}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M211.97 218.497V197.03h73.969v42.938H211.97z" fill="#ffffff" />
    <text
        y={221.725}
        x={245.539}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={221.725} x={245.539}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M289.968 218.497V197.03h57.01v42.938h-57.01z" fill="#ffffff" />
    <text
        y={220.823}
        x={315.358}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={220.823} x={315.358}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M347.94 218.497V197.03h67.113v42.938H347.94z" fill="#ffffff" />
    <text
        y={221.003}
        x={377.96}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={221.003} x={377.96}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M416.015 218.497V197.03h64.948v42.938h-64.948z" fill="#ffffff" />
    <text
        y={220.823}
        x={443.99}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={220.823} x={443.99}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M485.112 218.497V197.03H526.967v42.938H485.112z" fill="#ffffff" />
    <text
        y={221.725}
        x={501.361}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={221.725} x={501.361}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M528.11 218.497V197.03H599.01v42.938H528.11z" fill="#ffffff" />
    <text
        y={221.725}
        x={557.469}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={221.725} x={557.469}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M599.973 218.497V197.03h64.948v42.938h-64.948z" fill="#ffffff" />
    <text
        y={219.56}
        x={628.19}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={219.56} x={628.19}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M669.07 218.497V197.03H719.947v42.938h-50.875z" fill="#ffffff" />
    <text
        y={220.101}
        x={691.514}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={220.101} x={691.514}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M724.096 218.497V197.03h30.85v42.938h-30.85z" fill="#ffffff" />
    <text
        y={221.183}
        x={737.699}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={221.183} x={737.699}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M5.13 322.878c-.135-.135-.245-18.565-.245-40.957v-40.713h37.168l-.092 40.863-.092 40.863-18.248.094c-10.036.051-18.358-.016-18.492-.15z"
        fill="#ffffff"
    />
    <text
        y={289.073}
        x={18.88}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={289.073} x={18.88}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M46.136 281.922v-40.95h41.843v81.9H46.136z" fill="#ffffff" />
    <text
        y={287.797}
        x={61.744}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={287.797} x={61.744}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M89 281.904v-40.967l9.758.148c5.368.08 16.49.217 24.718.302l14.959.155.157 21.338c.086 11.736.227 30.035.312 40.665l.156 19.326H89z"
        fill="#ffffff"
    />
    <text
        y={285.501}
        x={110.475}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={285.501} x={110.475}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M140.027 281.906V240.94l14.096.147c7.753.08 23.583.216 35.176.301l21.08.155.16 13.556c.088 7.455.233 25.754.322 40.664l.163 27.108H140.026z"
        fill="#ffffff"
    />
    <text
        y={283.459}
        x={172.219}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={283.459} x={172.219}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M211.976 281.922v-40.95h73.99v81.9h-73.99z" fill="#ffffff" />
    <text
        y={281.674}
        x={245.444}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={281.674} x={245.444}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M290.049 281.922v-40.95h56.896v81.9h-56.896z" fill="#ffffff" />
    <text
        y={284.735}
        x={315.352}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={284.735} x={315.352}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M348.23 283.516c.077-21.645.213-39.89.302-40.543.125-.92.286-1.226.712-1.353 1.05-.313 26.17-.461 45.615-.27l19.55.193.159 17.766c.087 9.77.23 28.07.317 40.664l.16 22.898H348.09z"
        fill="#ffffff"
    />
    <text
        y={286.266}
        x={376.33}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={286.266} x={376.33}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M416.002 281.922v-40.95h65.06v81.9h-65.06z" fill="#ffffff" />
    <text
        y={283.715}
        x={445.473}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={283.715} x={445.473}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M484.975 281.903v-40.968l8.1.148c4.456.081 13.8.218 20.763.303l12.663.156.156 30.523c.087 16.788.2 35.087.25 40.665l.094 10.141h-42.026z"
        fill="#ffffff"
    />
    <text
        y={283.204}
        x={502.369}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={283.204} x={502.369}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M528.093 281.922v-40.95h70.929v81.9h-70.929z" fill="#ffffff" />
    <text
        y={283.97}
        x={560.285}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={283.97} x={560.285}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M600.139 288.874c.01-31.443.21-46.677.617-47.085.402-.402 7.753-.553 35.027-.717l29.15-.176v81.975h-64.805z"
        fill="#ffffff"
    />
    <text
        y={281.674}
        x={625.091}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={281.674} x={625.091}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M669.015 281.922v-40.95h51.028v81.9h-51.028z" fill="#ffffff" />
    <text
        y={281.674}
        x={688.875}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={281.674} x={688.875}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M724.125 281.922v-40.95h30.872v81.9h-30.872z" fill="#ffffff" />
    <text
        y={280.908}
        x={738.117}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={280.908} x={738.117}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M5.075 380.85c-.093-.094-.17-12.666-.17-27.938v-27.768H41.9v55.876H23.573c-10.08 0-18.404-.077-18.498-.17z"
        fill="#ffffff"
    />
    <text
        y={358.981}
        x={18.37}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={358.981} x={18.37}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M45.983 352.061v-26.917H88.08v53.834H45.983z" fill="#ffffff" />
    <text
        y={356.174}
        x={63.785}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={356.174} x={63.785}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M89.101 352.061v-26.917h49.752v53.834H89.101z" fill="#ffffff" />
    <text
        y={354.643}
        x={108.944}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={354.643} x={108.944}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M140.044 352.061v-26.917h70.929v53.834h-70.929z" fill="#ffffff" />
    <text
        y={354.643}
        x={169.667}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={354.643} x={169.667}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M211.908 352.061v-26.917h73.99v53.834h-73.99z" fill="#ffffff" />
    <text
        y={355.409}
        x={246.464}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={355.409} x={246.464}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M290.066 352.061v-26.917h56.896v53.834h-56.896z" fill="#ffffff" />
    <text
        y={354.133}
        x={310.759}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={354.133} x={310.759}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M347.982 352.061v-26.917h67.101v53.834h-67.1z" fill="#ffffff" />
    <text
        y={354.643}
        x={377.606}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={354.643} x={377.606}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M416.104 352.061v-26.917h64.806v53.834h-64.806z" fill="#ffffff" />
    <text
        y={354.898}
        x={443.687}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={354.898} x={443.687}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M485.077 352.061v-26.917h41.843v53.834h-41.843z" fill="#ffffff" />
    <text
        y={356.684}
        x={501.859}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={356.684} x={501.859}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M527.94 352.061v-26.917h70.929v53.834H527.94z" fill="#ffffff" />
    <text
        y={356.174}
        x={558.755}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={356.174} x={558.755}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M600.06 352.061v-26.917h64.805v53.834H600.06z" fill="#ffffff" />
    <text
        y={355.919}
        x={626.366}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={355.919} x={626.366}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M668.947 353.082v-27.938h51.028v55.876h-51.028z" fill="#ffffff" />
    <text
        y={356.174}
        x={691.682}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={356.174} x={691.682}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M724.057 353.082v-27.938h30.872v55.876h-30.872z" fill="#ffffff" />
    <text
        y={357.45}
        x={737.097}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={357.45} x={737.097}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M4.957 403.434l.133-21.304h36.74l.133 21.304.133 21.304H4.824z"
        fill="#ffffff"
    />
    <text
        y={411.336}
        x={19.484}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={411.336} x={19.484}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M46.128 403.89v-20.928h41.856V424.817H46.128z" fill="#ffffff" />
    <text
        y={409.532}
        x={63.144}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={409.532} x={63.144}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M89.066 403.913v-20.905l21.018.168c11.56.093 22.656.259 24.658.369l3.641.2.238 11.606c.13 6.383.237 15.624.238 20.536v8.93H89.066z"
        fill="#ffffff"
    />
    <text
        y={408.81}
        x={110.05}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={408.81} x={110.05}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M139.942 403.912v-20.906l30.038.168c16.521.093 32.343.262 35.159.376l5.12.207.187 1.857c.103 1.022.269 10.261.37 20.53l.182 18.673h-71.056z"
        fill="#ffffff"
    />
    <text
        y={409.171}
        x={169.586}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={409.171} x={169.586}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M212.106 403.89v-20.928h73.968V424.817h-73.968z" fill="#ffffff" />
    <text
        y={410.614}
        x={243.915}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={410.614} x={243.915}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M290.164 403.89v-20.928h56.649V424.817h-56.649z" fill="#ffffff" />
    <text
        y={408.089}
        x={314.275}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={408.089} x={314.275}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M348.02 406.145c.132-10.27.342-19.505.464-20.522l.223-1.85 1.849-.222c2.467-.296 55.728-.288 60.219.009 3.197.212 3.539.304 3.675.99.083.417.242 9.647.353 20.512l.201 19.755h-67.227z"
        fill="#ffffff"
    />
    <text
        y={408.089}
        x={377.419}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={408.089} x={377.419}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M416.09 403.89v-20.928h64.948V424.817H416.09z" fill="#ffffff" />
    <text
        y={408.45}
        x={443.088}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={408.45} x={443.088}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M485.007 403.91v-20.907l17.41.172c9.575.094 18.885.26 20.69.37l3.28.197.237 11.608c.13 6.383.237 15.625.238 20.537v8.93H485.007z"
        fill="#ffffff"
    />
    <text
        y={408.45}
        x={501.181}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={408.45} x={501.181}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M528.185 403.89v-20.928h70.721V424.817h-70.72z" fill="#ffffff" />
    <text
        y={406.285}
        x={555.665}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={406.285} x={555.665}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M600.095 405.062c.115-10.865.315-20.104.445-20.53.167-.55.622-.837 1.556-.983.726-.114 15.163-.317 32.08-.451l30.76-.245v41.964h-65.05z"
        fill="#ffffff"
    />
    <text
        y={409.171}
        x={629.272}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={409.171} x={629.272}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M668.906 403.55c0-11.697.121-21.322.27-21.39.46-.21 49.9.336 50.116.553.112.112.293 9.631.401 21.154l.198 20.95h-50.985z"
        fill="#ffffff"
    />
    <text
        y={408.81}
        x={691.694}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={408.81} x={691.694}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M724.111 403.348V381.88h30.67v42.938h-30.67z" fill="#ffffff" />
    <text
        y={408.45}
        x={736.436}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={408.45} x={736.436}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M4.976 456v-29.046H41.78v58.092H4.976z" fill="#ffffff" />
    <text
        y={461.49}
        x={20.206}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={461.49} x={20.206}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M46.11 455.94v-28.866H87.964v57.732H46.109z" fill="#ffffff" />
    <text
        y={460.408}
        x={63.144}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={460.408} x={63.144}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M89.167 455.94v-28.866h49.794v57.732H89.167z" fill="#ffffff" />
    <text
        y={462.212}
        x={109.69}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={462.212} x={109.69}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M139.923 455.94v-28.866h71.082v57.732h-71.082z" fill="#ffffff" />
    <text
        y={461.851}
        x={167.782}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={461.851} x={167.782}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M211.967 455.94v-28.866h73.968v57.732h-73.968z" fill="#ffffff" />
    <text
        y={461.49}
        x={246.441}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={461.49} x={246.441}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M289.904 455.94v-28.866h57.01v57.732h-57.01z" fill="#ffffff" />
    <text
        y={461.49}
        x={313.193}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={461.49} x={313.193}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M348.117 455.94v-28.866h66.752v57.732h-66.752z" fill="#ffffff" />
    <text
        y={461.851}
        x={377.419}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={461.851} x={377.419}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M415.951 455.94v-28.866H480.9v57.732H415.95z" fill="#ffffff" />
    <text
        y={459.325}
        x={443.449}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={459.325} x={443.449}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M485.108 455.94v-28.866h41.856v57.732h-41.856z" fill="#ffffff" />
    <text
        y={461.49}
        x={500.459}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={461.49} x={500.459}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M528.166 455.94v-28.866h70.721v57.732h-70.72z" fill="#ffffff" />
    <text
        y={460.047}
        x={559.273}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={460.047} x={559.273}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M599.97 455.94v-28.866h64.948v57.732H599.97z" fill="#ffffff" />
    <text
        y={459.325}
        x={627.829}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={459.325} x={627.829}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M668.887 455.94v-28.866h51.236v57.732h-51.236z" fill="#ffffff" />
    <text
        y={456.8}
        x={688.808}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={456.8} x={688.808}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M724.092 455.94v-28.866h31.031v57.732h-31.031z" fill="#ffffff" />
    <text
        y={457.16}
        x={737.158}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={457.16} x={737.158}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M4.977 509.004v-21.942H41.972v43.884H4.977z" fill="#ffffff" />
    <text
        y={510.788}
        x={20.411}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={510.788} x={20.411}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M46.14 509.004v-21.942h41.842v43.884H46.14z" fill="#ffffff" />
    <text
        y={510.788}
        x={61.489}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={510.788} x={61.489}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M89.003 509.004v-21.942H139.01v43.884H89.003z" fill="#ffffff" />
    <text
        y={511.554}
        x={111.496}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={511.554} x={111.496}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M140.116 509.004v-21.942h70.928v43.884h-70.928z" fill="#ffffff" />
    <text
        y={514.871}
        x={170.178}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={514.871} x={170.178}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M212.065 509.004v-21.942h73.99v43.884h-73.99z" fill="#ffffff" />
    <text
        y={516.657}
        x={245.444}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={516.657} x={245.444}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M290.052 509.004v-21.942H346.95v43.884H290.052z" fill="#ffffff" />
    <text
        y={513.085}
        x={315.607}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={513.085} x={315.607}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M348.054 509.004v-21.942H414.901v43.884H348.054z" fill="#ffffff" />
    <text
        y={513.595}
        x={378.371}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={513.595} x={378.371}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M415.921 509.004v-21.942h65.06v43.884h-65.06z" fill="#ffffff" />
    <text
        y={512.319}
        x={444.197}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={512.319} x={444.197}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M484.979 510.056v-22.994h42.015l-.087 5.167c-.047 2.841-.157 13.046-.244 22.677l-.157 17.51-9.601.158c-5.281.086-14.625.228-20.764.316l-11.162.16z"
        fill="#ffffff"
    />
    <text
        y={515.126}
        x={501.348}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={515.126} x={501.348}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M528.097 510.025v-22.963h70.929v45.925h-70.929z" fill="#ffffff" />
    <text
        y={514.871}
        x={561.561}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={514.871} x={561.561}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M629.515 532.718c-10.103-.093-20.737-.185-23.63-.205l-5.262-.036-.158-7.208c-.088-3.964-.233-14.182-.323-22.707l-.163-15.5H664.852v45.925l-8.484-.05c-4.665-.027-16.75-.126-26.853-.219z"
        fill="#ffffff"
    />
    <text
        y={513.34}
        x={629.428}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={513.34} x={629.428}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M668.934 510.055v-22.993h51.094l-.162 14.607c-.09 8.034-.233 18.239-.32 22.678l-.158 8.07-11.513.157c-6.333.086-17.685.228-25.227.315l-13.714.16z"
        fill="#ffffff"
    />
    <text
        y={512.829}
        x={691.682}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={512.829} x={691.682}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M724.044 510.062v-23h30.945l-.168 18.434c-.092 10.139-.238 20.34-.325 22.671l-.158 4.238-5.898.161c-3.244.089-10.06.237-15.147.329l-9.249.167z"
        fill="#ffffff"
    />
    <text
        y={512.829}
        x={737.862}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={512.829} x={737.862}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M4.89 566.811v-31.898l19.008.134 19.007.133.132 31.765.131 31.765H4.89z"
        fill="#ffffff"
    />
    <text
        y={575.083}
        x={18.88}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={575.083} x={18.88}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M45.202 566.818v-31.893h42.863v63.785H45.202z" fill="#ffffff" />
    <text
        y={575.594}
        x={61.744}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={575.594} x={61.744}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M89.086 566.818v-31.893h47.966v63.785H89.086z" fill="#ffffff" />
    <text
        y={573.553}
        x={110.22}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={573.553} x={110.22}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M141.304 566.845v-31.864l34.316.297c18.874.163 34.431.4 34.572.525.14.125.317 14.33.394 31.567l.139 31.34h-69.42z"
        fill="#ffffff"
    />
    <text
        y={575.594}
        x={171.453}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={575.594} x={171.453}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M212.233 566.818v-31.893h73.48v63.785h-73.48z" fill="#ffffff" />
    <text
        y={573.553}
        x={243.913}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={573.553} x={243.913}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M290.305 566.818v-31.893H346.946v63.785h-56.64z" fill="#ffffff" />
    <text
        y={572.532}
        x={308.718}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={572.532} x={308.718}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M348.307 568.06c0-20.152.18-30.989.528-31.637.514-.96 1.42-.987 33.168-.987h32.64l.003 27.427c.002 15.085.15 29.322.33 31.637l.329 4.21H348.307z"
        fill="#ffffff"
    />
    <text
        y={572.532}
        x={376.585}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={572.532} x={376.585}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M416.174 566.818v-31.893h64.805v63.785h-64.805z" fill="#ffffff" />
    <text
        y={580.186}
        x={441.901}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={580.186} x={441.901}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M485.232 566.307v-32.402h41.842v64.805h-41.842z" fill="#ffffff" />
    <text
        y={574.063}
        x={499.562}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={574.063} x={499.562}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M528.095 566.307v-32.402h70.929v64.805h-70.929z" fill="#ffffff" />
    <text
        y={574.573}
        x={557.734}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={574.573} x={557.734}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M599.998 566.435l.131-32.275h64.806l.13 32.275.132 32.275H599.866z"
        fill="#ffffff"
    />
    <text
        y={572.532}
        x={628.663}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={572.532} x={628.663}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M669.272 566.307v-32.402H719.789v64.805h-50.518z" fill="#ffffff" />
    <text
        y={572.532}
        x={693.468}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={572.532} x={693.468}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M723.995 566.435l.132-32.275 15.436-.135 15.436-.135v64.82H723.864z"
        fill="#ffffff"
    />
    <text
        y={571.001}
        x={735.821}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={571.001} x={735.821}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M5.222 633.97v-32.835h37.886V666.804H5.222z" fill="#ffffff" />
    <text
        y={640.818}
        x={20.928}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={640.818} x={20.928}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M44.912 633.97v-32.835H87.85V666.804H44.912z" fill="#ffffff" />
    <text
        y={638.653}
        x={62.783}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={638.653} x={62.783}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M88.932 633.97v-32.835H136.921V666.804H88.932z" fill="#ffffff" />
    <text
        y={637.21}
        x={107.164}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={637.21} x={107.164}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M140.89 633.97v-32.835h70V666.804h-70z" fill="#ffffff" />
    <text
        y={640.097}
        x={168.143}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={640.097} x={168.143}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M211.972 633.97v-32.835h73.968V666.804h-73.968z" fill="#ffffff" />
    <text
        y={640.457}
        x={241.389}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={640.457} x={241.389}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M290.03 633.609v-32.474h57.009v64.948H290.03z" fill="#ffffff" />
    <text
        y={641.901}
        x={314.997}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={641.901} x={314.997}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M348.122 633.609v-32.474h66.752v64.948h-66.752z" fill="#ffffff" />
    <text
        y={642.262}
        x={373.811}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={642.262} x={373.811}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M416.197 633.609v-32.474H480.784v64.948H416.197z" fill="#ffffff" />
    <text
        y={639.375}
        x={442.367}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={639.375} x={442.367}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M485.114 633.609v-32.474H526.969v64.948H485.114z" fill="#ffffff" />
    <text
        y={642.262}
        x={499.376}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={642.262} x={499.376}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M528.172 633.609v-32.474h70.72v64.948h-70.72z" fill="#ffffff" />
    <text
        y={639.736}
        x={558.551}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={639.736} x={558.551}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M600.095 633.609v-32.474h64.948v64.948h-64.948z" fill="#ffffff" />
    <text
        y={642.262}
        x={627.468}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={642.262} x={627.468}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M669.012 633.609v-32.474h50.876v64.948h-50.876z" fill="#ffffff" />
    <text
        y={642.622}
        x={691.694}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={642.622} x={691.694}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M724.218 633.609v-32.474h30.67v64.948h-30.67z" fill="#ffffff" />
    <text
        y={643.344}
        x={736.797}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={643.344} x={736.797}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M5.222 698.019v-29.05h37.89l-.092 28.956-.093 28.956-18.853.094-18.852.093z"
        fill="#ffffff"
    />
    <text
        y={701.797}
        x={20.206}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={701.797} x={20.206}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M45.152 726.821c-.132-.132-.24-13.203-.24-29.046v-28.806H87.85v58.093H66.62c-11.675 0-21.336-.109-21.469-.24z"
        fill="#ffffff"
    />
    <text
        y={700.354}
        x={61.7}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={700.354} x={61.7}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M88.932 698.016v-29.047H136.921v58.093H88.932z" fill="#ffffff" />
    <text
        y={702.158}
        x={107.525}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={702.158} x={107.525}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M140.89 698.976v-30.007H211l-.263 29.675c-.145 16.322-.297 29.71-.339 29.75-.041.042-15.697.191-34.791.332l-34.717.256z"
        fill="#ffffff"
    />
    <text
        y={705.405}
        x={169.586}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={705.405} x={169.586}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M211.972 698.918v-29.949h73.968V728.866h-73.968z" fill="#ffffff" />
    <text
        y={706.488}
        x={239.224}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={706.488} x={239.224}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M289.91 699.459v-29.407h57.009v58.814h-57.01z" fill="#ffffff" />
    <text
        y={704.684}
        x={313.914}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={704.684} x={313.914}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M348.562 728.054c-.077-.248-.236-13.4-.354-29.227l-.214-28.775h66.94l-.083 17.59c-.046 9.674-.186 22.826-.312 29.226l-.23 11.637h-32.804c-25.929 0-32.833-.095-32.943-.451z"
        fill="#ffffff"
    />
    <text
        y={702.88}
        x={375.254}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={702.88} x={375.254}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M416.197 699.459v-29.407H480.784v58.814H416.197z" fill="#ffffff" />
    <text
        y={704.323}
        x={442.728}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={704.323} x={442.728}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M484.873 699.459v-29.407h42.063l-.105 20.116c-.058 11.063-.204 24.19-.324 29.169l-.218 9.053-11.927.238c-6.56.13-15.878.238-20.708.238h-8.78z"
        fill="#ffffff"
    />
    <text
        y={705.766}
        x={502.985}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={705.766} x={502.985}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M528.172 699.459v-29.407h70.72v58.814h-70.72z" fill="#ffffff" />
    <text
        y={703.601}
        x={560.355}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={703.601} x={560.355}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M613.267 728.595l-12.506-.1-.2-2.972c-.11-1.634-.282-14.784-.381-29.221l-.182-26.25H664.923v58.814l-19.575-.086c-10.766-.047-25.202-.13-32.08-.185z"
        fill="#ffffff"
    />
    <text
        y={702.519}
        x={628.55}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={702.519} x={628.55}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M668.892 699.459v-29.407h51.959v58.814h-51.96z" fill="#ffffff" />
    <text
        y={706.488}
        x={691.694}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={706.488} x={691.694}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M729.098 728.596l-6.366-.107-.213-6.938c-.117-3.816-.275-16.964-.352-29.218l-.139-22.281h33.1v58.814l-9.832-.082c-5.408-.044-12.697-.13-16.198-.188z"
        fill="#ffffff"
    />
    <text
        y={707.931}
        x={736.075}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={707.931} x={736.075}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M4.805 762.082v-30.67h38.247v61.34H4.805z" fill="#ffffff" />
    <text
        y={768.549}
        x={19.845}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={768.549} x={19.845}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M45.214 761.91v-31.03h42.577v62.06H45.214z" fill="#ffffff" />
    <text
        y={770.353}
        x={63.865}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={770.353} x={63.865}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M88.962 762l.092-30.94 23.904-.093 23.905-.093v62.066H88.869z"
        fill="#ffffff"
    />
    <text
        y={768.549}
        x={107.886}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={768.549} x={107.886}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M141.192 760.467v-30.31H210.831V790.776H141.192z" fill="#ffffff" />
    <text
        y={767.106}
        x={168.864}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={767.106} x={168.864}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M212.034 760.467v-30.31h73.968V790.776h-73.968z" fill="#ffffff" />
    <text
        y={763.137}
        x={242.472}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={763.137} x={242.472}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M290.211 760.467v-30.31h56.649V790.776h-56.649z" fill="#ffffff" />
    <text
        y={762.415}
        x={311.028}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={762.415} x={311.028}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M348.063 760.467v-30.31h66.752V790.776h-66.752z" fill="#ffffff" />
    <text
        y={763.137}
        x={373.45}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={763.137} x={373.45}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M415.898 760.467v-30.31h64.947V790.776h-64.947z" fill="#ffffff" />
    <text
        y={762.415}
        x={443.088}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={762.415} x={443.088}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M484.935 760.467v-30.31H526.79V790.776H484.935z" fill="#ffffff" />
    <text
        y={762.054}
        x={503.345}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={762.054} x={503.345}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M527.872 760.467v-30.31h71.082V790.776h-71.082z" fill="#ffffff" />
    <text
        y={764.58}
        x={560.355}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={764.58} x={560.355}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M600.157 760.467v-30.31h64.948V790.776h-64.948z" fill="#ffffff" />
    <text
        y={763.497}
        x={630.354}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={763.497} x={630.354}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M669.074 761.549v-31.391h51.958v62.782h-51.958z" fill="#ffffff" />
    <text
        y={764.58}
        x={691.694}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={764.58} x={691.694}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M731.104 792.67l-8.51-.103-.24-19.749c-.131-10.862-.24-24.904-.24-31.204v-11.456h32.835v62.782l-7.667-.083c-4.217-.046-11.498-.13-16.178-.187z"
        fill="#ffffff"
    />
    <text
        y={764.941}
        x={736.797}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={764.941} x={736.797}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M5.163 816.577v-22.554H43.054l-.092 22.461-.093 22.461-18.853.093-18.853.094z"
        fill="#ffffff"
    />
    <text
        y={822.311}
        x={23.453}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={822.311} x={23.453}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M45.214 816.574v-22.551h42.577v45.102H45.214z" fill="#ffffff" />
    <text
        y={820.868}
        x={64.226}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={820.868} x={64.226}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M89.114 816.577v-22.554H137.109l-.093 22.461-.093 22.461-23.905.093-23.904.093z"
        fill="#ffffff"
    />
    <text
        y={818.342}
        x={109.69}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={818.342} x={109.69}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M141.072 817.062v-22.064l34.549.265c19.001.145 34.616.332 34.699.414.205.205.705 42.838.506 43.178-.087.149-15.817.27-34.956.27h-34.798z"
        fill="#ffffff"
    />
    <text
        y={820.868}
        x={170.668}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={820.868} x={170.668}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M212.154 817.115v-22.01h74.69v44.02h-74.69z" fill="#ffffff" />
    <text
        y={822.311}
        x={245.358}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={822.311} x={245.358}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M288.227 817.674c.095-16.992.218-21.548.59-21.92.374-.374 6.268-.494 29.316-.595l28.848-.128v44.094H288.108z"
        fill="#ffffff"
    />
    <text
        y={820.868}
        x={313.914}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={820.868} x={313.914}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M348.057 838.541c-.334-.87.17-40.546.53-41.812l.308-1.082 7.733-.254c4.253-.139 18.958-.156 32.68-.037l24.946.216.209 4.006c.115 2.204.255 11.963.31 21.687l.102 17.68-33.296.092c-30.498.085-33.315.043-33.522-.496z"
        fill="#ffffff"
    />
    <text
        y={820.507}
        x={379.945}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={820.507} x={379.945}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M416.138 817.117v-22.012h64.953l-.093 21.92-.093 21.92-32.383.092-32.384.092z"
        fill="#ffffff"
    />
    <text
        y={822.672}
        x={448.14}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={822.672} x={448.14}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M485.055 817.062v-22.064l20.657.264c11.36.145 20.682.291 20.714.324.031.033.176 9.843.322 21.8l.265 21.74h-41.959z"
        fill="#ffffff"
    />
    <text
        y={823.394}
        x={500.82}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={823.394} x={500.82}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M527.993 817.117v-22.012H599.08l-.093 21.92-.093 21.92-35.45.092-35.451.092z"
        fill="#ffffff"
    />
    <text
        y={820.868}
        x={559.273}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={820.868} x={559.273}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M600.215 817.645c.098-17.21.216-21.542.594-21.775.87-.538 12.26-.765 38.377-.765h25.924l-.093 21.92-.093 21.92-32.415.092-32.415.092z"
        fill="#ffffff"
    />
    <text
        y={821.95}
        x={628.55}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={821.95} x={628.55}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))}
        d="M669.074 816.577v-22.554h51.963l-.093 22.461-.093 22.461-25.888.093-25.89.092z"
        fill="#ffffff"
    />
    <text
        y={820.868}
        x={694.581}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={820.868} x={694.581}>
        {"0"}
        </tspan>
    </text>
    <path onClick={((e) => props.handleClick(e))} onContextMenu={((e) => props.handleErase(e))} d="M722.114 816.574v-22.551h32.835v45.102h-32.835z" fill="#ffffff" />
    <text
        y={819.786}
        x={736.075}
        style={{
        lineHeight: 1.25,
        }}
        fontSize={10}
        fontFamily="sans-serif"
        strokeWidth={0.75}
    >
        <tspan y={819.786} x={736.075}>
        {"0"}
        </tspan>
    </text>
    </svg>
    )
}

export default SvgCompa;
