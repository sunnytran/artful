import React, { Component } from 'react';;

class SvgCompa extends React.Component {

  constructor(props) {
    super(props);

    this.svgRef = React.createRef();
  }

  render() {
    var x = <svg
        ref={this.svgRef}
        onLoad={this.props.preparePortrait(this.svgRef)}
        width={1013.333}
        height={1125.333}
        viewBox="0 0 760 844"
        preserveAspectRatio="xMidYMid meet"
        id="svg8"
        {...this.props}
      >
        <g transform="matrix(.1 0 0 -.1 0 844)" fill="#000000" stroke="none" id="g6">
          <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
            d="M0 4220V0h7600v8440H0V4220zm420 4050v-120H50v240h370v-120zm460 10v-110H460v220h420v-110zm510 0v-110H890v220h500v-110zm720 0v-110h-710v220h710v-110zm750 0v-110h-740v220h740v-110zm610-10v-120h-570v240h570v-120zm678 3l-3-118h-660l-3 118-3 117h672l-3-117zm662-3v-120h-650v240h650v-120zm458 3l-3-118-207-3-208-2v240h421l-3-117zm722-3v-120h-710v240h710v-120zm660 0v-120l-322 2-323 3-3 118-3 117h651v-120zm560 0v-120h-520v240h520v-120zm340 0v-120l-162 2-163 3-3 85c-2 47 0 100 3 118l6 32h319v-120zM420 7990v-150H50v300h370v-150zm3050 0v-150h-570v300h570v-150zm680 0v-150h-670v300h670v-150zm660 0v-150h-650v300h650v-150zm460 0v-150h-420v300h420v-150zm720 0v-150h-710v300h710v-150zm660 0v-150h-650v300h650v-150zm560 0v-150h-520v300h520v-150zm340 0v-150h-330v300h330v-150zm-6670-5v-145H460v290h420v-145zm490 0v-145H890v290h480v-145zm738-2l3-143h-701v290l348-2 347-3 3-142zm752 2v-145h-740v290h740v-145zM420 7530v-300H50v600h370v-300zm460 0v-300H460v600h420v-300zm490 0v-300H890v600h480v-300zm738-2l2-298h-700v600l348-2 347-3 3-297zm752 2v-300h-740v600h740v-300zm610 10v-290h-570v580h570v-290zm678-2l2-288h-670v283c0 156 3 287 7 290 4 4 153 6 332 5l326-3 3-287zm662 2v-290h-650v580h650v-290zm458-2l2-288h-420v580l208-2 207-3 3-287zm722 2v-290h-710v580h710v-290zm660 0v-290h-650v283c0 156 3 287 7 290 3 4 150 7 325 7h318v-290zm560-10v-300h-520v600h520v-300zm340 0v-300h-330v293c0 162 3 297 7 300 3 4 78 7 165 7h158v-300zM420 6860v-350H50v700h370v-350zm460 0v-350H460v700h420v-350zm490 0v-350H890v700h480v-350zm738 3l-3-348-347-3-348-2v700h700l-2-347zm752-3v-350h-740v700h740v-350zm610 0v-350h-570v700h570v-350zm675 0v-345h-660l-3 335c-1 184 0 341 3 348 3 10 74 12 332 10l328-3v-345zm665 0v-350h-650v700h650v-350zm455 0v-345l-207-3-208-2v700l208-2 207-3v-345zm725 0v-350h-710v700h710v-350zm660 0v-350l-322 2-323 3-3 335c-1 184 0 341 3 347 3 10 77 13 325 13h320v-350zm560 0v-350h-520v700h520v-350zm340 0v-350l-162 2-163 3-3 348-2 347h330v-350zM420 6255v-215H50v430h370v-215zm460 0v-215H460v430h420v-215zm510 0v-215H890v430h500v-215zm720 0v-215h-710v430h710v-215zm750 0v-215h-740v430h740v-215zm610 0v-215h-570v430h570v-215zm680 0v-215h-670v430h670v-215zm660 0v-215h-650v430h650v-215zm460 0v-215h-420v430h420v-215zm720 0v-215h-710v430h710v-215zm660 0v-215h-650v430h650v-215zm550 0v-215h-510v430h510v-215zm350 0v-215h-310v430h310v-215zM420 5620v-410H50v820h370v-410zm460 0v-410H460v820h420v-410zm508-2l2-408H890v820l248-2 247-3 3-407zm720 0l2-408h-710v820l353-2 352-3 3-407zm752 2v-410h-740v820h740v-410zm610 0v-410h-570v820h570v-410zm678-2l2-408h-670v403c0 222 3 407 7 410 4 4 153 6 332 5l326-3 3-407zm662 2v-410h-650v820h650v-410zm458-2l2-408h-420v820l208-2 207-3 3-407zm722 2v-410h-710v820h710v-410zm660 0v-410h-650v403c0 222 3 407 7 410 3 4 150 7 325 7h318v-410zm550 0v-410h-510v820h510v-410zm350 0v-410h-310v820h310v-410zM420 4910v-280H50v560h370v-280zm460 10v-270H460v540h420v-270zm510 0v-270H890v540h500v-270zm720 0v-270h-710v540h710v-270zm750 0v-270h-740v540h740v-270zm610 0v-270h-570v540h570v-270zm680 0v-270h-670v540h670v-270zm660 0v-270h-650v540h650v-270zm460 0v-270h-420v540h420v-270zm720 0v-270h-710v540h710v-270zm660 0v-270h-650v540h650v-270zm550-10v-280h-510v560h510v-280zm350 0v-280h-310v560h310v-280zM420 4405v-215H50v430h370v-215zm6778-2l2-213h-510v430l253-2 252-3 3-212zm352 2v-215h-310v430h310v-215zm-6670-5v-210H460v420h420v-210zm508-2l2-208H890v420l248-2 247-3 3-207zm720 0l2-208h-710v420l353-2 352-3 3-207zm752 2v-210h-740v420h740v-210zm610 0v-210h-570v420h570v-210zm678-2l2-208h-670v203c0 112 3 207 7 210 4 4 153 6 332 5l326-3 3-207zm662 2v-210h-650v420h650v-210zm458-2l2-208h-420v420l208-2 207-3 3-207zm722 2v-210h-710v420h710v-210zm660 0v-210h-650v203c0 112 3 207 7 210 3 4 150 7 325 7h318v-210zM420 3880v-290H50v580h370v-290zm460 0v-290H460v580h420v-290zm510 0v-290H890v580h500v-290zm720 0v-290h-710v580h710v-290zm750 0v-290h-740v580h740v-290zm610 0v-290h-570v580h570v-290zm680 0v-290h-670v580h670v-290zm660 0v-290h-650v580h650v-290zm460 0v-290h-420v580h420v-290zm720 0v-290h-710v580h710v-290zm660 0v-290h-650v580h650v-290zm550 0v-290h-510v580h510v-290zm350 0v-290h-310v580h310v-290zM420 3350v-220H50v440h370v-220zm460 0v-220H460v440h420v-220zm510 0v-220H890v440h500v-220zm720 0v-220h-710v440h710v-220zm750 0v-220h-740v440h740v-220zm610 0v-220h-570v440h570v-220zm680 0v-220h-670v440h670v-220zm660 0v-220h-650v440h650v-220zm458-7l-3-228-207-3-208-2v460h420l-2-227zm722-3v-230h-710v460h710v-230zm660 0v-230l-322 2-323 3-3 228-2 227h650v-230zm548 3l-3-228-252-3-253-2v460h510l-2-227zm350 0l-3-228-152-3-153-3v461h310l-2-227zm-2278-568v-325h-420v650h420v-325zm720 0v-325h-710v650h710v-325zm660 0v-325h-650v650h650v-325zm550 0v-325h-510v650h510v-325zm350 0v-325h-310v650h310v-325zm-7120-5v-320H50v640h380v-320zm450 0v-320H450v640h430v-320zm490 0v-320H890v640h480v-320zm738-2l2-318h-700v640l348-2 347-3 3-317zm752 2v-320h-740v640h740v-320zm610 0v-320h-570v640h570v-320zm678-2l2-318h-670v313c0 173 3 317 7 320 4 4 153 6 332 5l326-3 3-317zm662 2v-320h-650v640h650v-320zM430 2100v-330H50v660h380v-330zm450 0v-330H450v660h430v-330zm490 0v-330H890v660h480v-330zm740 0v-330h-700v660h700v-330zm750 0v-330h-740v660h740v-330zm610 5v-325h-570v650h570v-325zm680 0v-325h-670v650h670v-325zm660 0v-325h-650v650h650v-325zm460 0v-325h-420v650h420v-325zm720 0v-325h-710v650h710v-325zm660 0v-325h-650v650h650v-325zm550 0v-325h-510v650h510v-325zm350 0v-325h-310v650h310v-325zM430 1460v-290H50v580h380v-290zm450 0v-290H450v580h430v-290zm490 0v-290H890v580h480v-290zm738-7l-3-298-347-3-348-2v600h700l-2-297zm752-3v-300h-740v600h740v-300zm610-5v-295h-570v590h570v-295zm678 3l-3-293h-660l-3 293-2 292h670l-2-292zm662-3v-295h-650v590h650v-295zm458 3l-3-293-207-3-208-2v590h420l-2-292zm722-3v-295h-710v590h710v-295zm660 0v-295l-322 2-323 3-3 293-2 292h650v-295zm560 0v-295h-520v590h520v-295zm340 0v-295l-162 2-163 3-3 293-2 292h330v-295zM2110 835V530h-700v610h700V835zm750 0V530h-740v610h740V835zm610 0V530h-570v610h570V835zm680 0V530h-670v610h670V835zm660 0V530h-650v610h650V835zm460 0V530h-420v610h420V835zm720 0V530h-710v610h710V835zm660 0V530h-650v610h650V835zm560-10V510h-520v630h520V825zm340 0V510l-162 2-163 3-3 313-2 312h330V825zm-7120-5V510H50v620h380V820zm450 0V510H450v620h430V820zm490 0V510H890v620h480V820zM430 275V50H50v450h380V275zm450 0V50H450v450h430V275zm490 0V50H890v450h480V275zm5840 0V50h-520v450h520V275zm340 0V50h-330v450h330V275zm-5442-7l2-218h-700v440l348-2 347-3 3-217zm762 2V50h-750v440h750V270zm600 0V50h-590v213c0 118 3 217 7 220 3 4 136 7 295 7h288V270zm678-2l2-218h-670v213c0 118 3 217 7 220 4 4 153 6 332 5l326-3 3-217zm662 2V50h-650v440h650V270zm458-2l2-218h-420v440l208-2 207-3 3-217zm722 2V50h-710v440h710V270zm660 0V50h-650v213c0 118 3 217 7 220 3 4 150 7 325 7h318V270z"
            id="path4"
          />
        </g>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={1}
          d="M6.75 22.673V6.685h49.157v31.978H6.75z"
          fill="#000000"
          strokeWidth={0.17}
        />
        <text display="none"
          id="text_1"
          y={20.666}
          x={20.156}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={20.666} x={20.156} id="tspan1035" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={2}
          d="M61.35 21.313V6.685h55.96V35.94H61.35z"
          fill="#c1e1ec"
          strokeWidth={0.17}
        />
        <text display="none"
          id="text_2"
          y={16.967}
          x={64.295}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={16.967} x={64.295} id="tspan1041" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={3}
          d="M118.671 21.313V6.685H185.348V35.94H118.67z"
          fill="#c1e1ec"
          strokeWidth={0.17}
        />
        <text display="none"
          id="text_3"
          y={18.498}
          x={111.113}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={18.498} x={111.113} id="tspan1047" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={4}
          d="M186.652 21.313V6.685h94.741V35.94h-94.741z"
          fill="#c1e1ec"
          strokeWidth={0.17}
        />
        <text display="none"
          id="text_4"
          y={19.263}
          x={171.071}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={19.263} x={171.071} id="tspan1053" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={5}
          d="M282.64 21.313V6.685h98.654V35.94H282.641z"
          fill="#c1e1ec"
          strokeWidth={0.17}
        />
        <text display="none"
          id="text_5"
          y={19.135}
          x={242.51}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={19.135} x={242.51} id="tspan1059" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={6}
          d="M386.737 22.673V6.685H462.598v31.978h-75.86z"
          fill="#bababa"
          strokeWidth={0.17}
        />
        <text display="none"
          id="text_6"
          y={20.921}
          x={315.224}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={20.921} x={315.224} id="tspan1065" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={7}
          d="M464.627 34.963c-.06-1.661-.219-7.689-.354-13.395-.135-5.707-.289-11.39-.34-12.63l-.096-2.253h89.66l-.096 2.168c-.053 1.193-.207 6.915-.342 12.715-.135 5.8-.294 11.866-.354 13.48l-.107 2.934h-87.862z"
          fill="#bababa"
          strokeWidth={0.17}
        />
        <text display="none"
          id="text_7"
          y={20.794}
          x={375.947}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={20.794} x={375.947} id="tspan1071" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={8}
          d="M554.732 22.673V6.685h86.577v31.978h-86.577z"
          fill="#bababa"
          strokeWidth={0.17}
        />
        <text display="none"
          id="text_8"
          y={19.646}
          x={445.345}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={19.646} x={445.345} id="tspan1077" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={9}
          d="M646.639 22.683V6.685h56.182l-.108 2.934c-.058 1.614-.226 8.177-.372 14.585-.145 6.408-.305 12.12-.354 12.692l-.09 1.04-5.645.11c-5.15.102-17.647.265-40.896.535l-8.717.101z"
          fill="#c1e1ec"
          strokeWidth={0.17}
        />
        <text display="none"
          id="text_9"
          y={19.391}
          x={502.369}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={19.391} x={502.369} id="tspan1083" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={10}
          d="M704.074 22.673V6.685h94.571v31.978h-94.571z"
          fill="#c1e1ec"
          strokeWidth={0.17}
        />
        <text display="none"
          id="text_10"
          y={19.646}
          x={559.903}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={19.646} x={559.903} id="tspan1089" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={11}
          d="M867.674 38.542c-15.598-.072-66.829-.571-66.91-.652-.063-.063-.83-27.071-.864-30.397l-.008-.808h86.748v31.978l-5.316-.042c-2.923-.022-9.066-.058-13.65-.08z"
          fill="#c1e1ec"
          strokeWidth={0.17}
        />
        <text display="none"
          id="text_11"
          y={19.773}
          x={628.152}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={19.773} x={628.152} id="tspan1095" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={12}
          d="M891.97 22.673V6.685h69.398v31.978h-69.399z"
          fill="#ffea00"
          strokeWidth={0.17}
        />
        <text display="none"
          id="text_12"
          y={19.773}
          x={690.789}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={19.773} x={690.789} id="tspan1101" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={13}
          d="M997.087 38.542c-8.328-.081-33.577-.572-33.659-.654-.157-.157-.508-11.538-.514-16.66-.007-6.12.158-8.703.772-12.034l.462-2.51h42.464v31.978l-2.68-.04c-1.473-.02-4.553-.057-6.845-.08z"
          fill="#ffea00"
          strokeWidth={0.17}
        />
        <text display="none"
          id="text_13"
          y={19.135}
          x={734.29}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={19.135} x={734.29} id="tspan1107" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={14}
          d="M6.635 60.007V40.042h49.312v39.931H6.635z"
          fill="#000000"
          strokeWidth={0.12}
        />
        <text display="none"
          id="text_14"
          y={47.989}
          x={20.206}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={47.989} x={20.206} id="tspan1113" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={15}
          d="M61.4 60.669V41.365h55.927v38.608H61.4z"
          fill="#ff3333"
          strokeWidth={0.12}
        />
        <text display="none"
          id="text_15"
          y={47.899}
          x={63.685}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={47.899} x={63.685} id="tspan1119" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={16}
          d="M118.69 60.669V41.365h63.986v38.608H118.69z"
          fill="#ff3333"
          strokeWidth={0.12}
        />
        <text display="none"
          id="text_16"
          y={48.44}
          x={109.87}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={48.44} x={109.87} id="tspan1125" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={17}
          d="M188.008 60.669V41.365h3.518c10.199.004 88.992.6 89.08.675.032.028.758 32.173.85 37.662l.005.27h-93.453z"
          fill="#bababa"
          strokeWidth={0.12}
        />
        <text display="none"
          id="text_17"
          y={48.801}
          x={171.3}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={48.801} x={171.3} id="tspan1131" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={18}
          d="M282.663 60.669V41.365h98.625v38.608h-98.625z"
          fill="#bababa"
          strokeWidth={0.12}
        />
        <text display="none"
          id="text_18"
          y={47.628}
          x={244.907}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={47.628} x={244.907} id="tspan1137" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={19}
          d="M386.66 60.007V40.042h76.013v39.931H386.66z"
          fill="#bababa"
          strokeWidth={0.12}
        />
        <text display="none"
          id="text_19"
          y={46.997}
          x={316.801}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={46.997} x={316.801} id="tspan1143" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={20}
          d="M463.996 60.007V40.042h89.363v39.931h-89.363z"
          fill="#bababa"
          strokeWidth={0.12}
        />
        <text display="none"
          id="text_20"
          y={47.177}
          x={378.05}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={47.177} x={378.05} id="tspan1149" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={21}
          d="M554.682 60.007V40.042H641.28v39.931H554.682z"
          fill="#bababa"
          strokeWidth={0.12}
        />
        <text display="none"
          id="text_21"
          y={46.456}
          x={444.441}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={46.456} x={444.441} id="tspan1155" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={22}
          d="M646.652 60.007V40.042h56.047v39.931h-56.047z"
          fill="#c1e1ec"
          strokeWidth={0.12}
        />
        <text display="none"
          id="text_22"
          y={46.185}
          x={503.436}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={46.185} x={503.436} id="tspan1163" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={23}
          d="M704.022 60.007V40.042h94.655v39.931h-94.655z"
          fill="#c1e1ec"
          strokeWidth={0.12}
        />
        <text display="none"
          id="text_23"
          y={47.989}
          x={562.069}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={47.989} x={562.069} id="tspan1169" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={24}
          d="M799.96 60.007V40.042H886.678v39.931H799.96z"
          fill="#c1e1ec"
          strokeWidth={0.12}
        />
        <text display="none"
          id="text_24"
          y={48.801}
          x={629.813}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={48.801} x={629.813} id="tspan1175" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={25}
          d="M891.97 60.007V40.042h69.398v39.931H891.97z"
          fill="#ffea00"
          strokeWidth={0.12}
        />
        <text display="none"
          id="text_25"
          y={48.26}
          x={690.07}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={48.26} x={690.07} id="tspan1181" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={26}
          d="M962.69 60.007V40.042h44.02v39.931h-44.02z"
          fill="#ffea00"
          strokeWidth={0.12}
        />
        <text display="none"
          id="text_26"
          y={48.711}
          x={736.255}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={48.711} x={736.255} id="tspan1187" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={27}
          d="M6.743 161.186c-.089-.088-.16-18.057-.16-39.93V81.484h49.311V161.346H31.4c-13.473 0-24.568-.072-24.656-.16z"
          fill="#000000"
          strokeWidth={0.241}
        />
        <text display="none"
          id="text_27"
          y={95.257}
          x={20.567}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={95.257} x={20.567} id="tspan1193" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={28}
          d="M61.427 121.416V81.485h55.807V161.346H61.427z"
          fill="#ff3333"
          strokeWidth={0.241}
        />
        <text display="none"
          id="text_28"
          y={95.618}
          x={63.865}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={95.618} x={63.865} id="tspan1199" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={29}
          d="M118.597 121.416V81.485h63.986V161.346h-63.986z"
          fill="#ff3333"
          strokeWidth={0.241}
        />
        <text display="none"
          id="text_29"
          y={95.257}
          x={108.788}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={95.257} x={108.788} id="tspan1205" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={30}
          d="M187.955 121.416V81.485l13.771-.004c15.194-.004 78.668.497 78.807.622.1.09.398 27.075.642 58.135l.166 21.108h-93.386z"
          fill="#bababa"
          strokeWidth={0.241}
        />
        <text display="none"
          id="text_30"
          y={93.272}
          x={171.21}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={93.272} x={171.21} id="tspan1211" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={31}
          d="M282.73 121.416V81.485h98.625V161.346h-98.624z"
          fill="#bababa"
          strokeWidth={0.241}
        />
        <text display="none"
          id="text_31"
          y={93.994}
          x={244.998}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={93.994} x={244.998} id="tspan1217" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={32}
          d="M386.807 120.093V81.485h75.773V158.7h-75.773z"
          fill="#bababa"
          strokeWidth={0.241}
        />
        <text display="none"
          id="text_32"
          y={93.272}
          x={313.734}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={93.272} x={313.734} id="tspan1223" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={33}
          d="M464.104 129.775c.001-26.735.242-43.297.671-46.242.17-1.165.202-1.204 1.135-1.386 1.935-.376 27.225-.537 56.508-.36 16.528.101 30.083.215 30.122.254.069.07.41 30.788.682 61.325l.137 15.334h-89.256z"
          fill="#bababa"
          strokeWidth={0.241}
        />
        <text display="none"
          id="text_33"
          y={92.19}
          x={375.254}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={92.19} x={375.254} id="tspan1229" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={34}
          d="M554.63 120.093V81.485h86.596V158.7H554.63z"
          fill="#bababa"
          strokeWidth={0.241}
        />
        <text display="none"
          id="text_34"
          y={89.484}
          x={445.434}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={89.484} x={445.434} id="tspan1235" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={35}
          d="M646.759 120.054V81.408l20.146.193c11.08.106 23.501.259 27.603.339l7.457.146.146 13.591c.08 7.475.232 24.713.336 38.307l.19 24.716h-55.878z"
          fill="#c1e1ec"
          strokeWidth={0.241}
        />
        <text display="none"
          id="text_35"
          y={91.649}
          x={502.624}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={91.649} x={502.624} id="tspan1241" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={36}
          d="M704.01 120.093V81.485h94.534V158.7H704.01z"
          fill="#c1e1ec"
          strokeWidth={0.241}
        />
        <text display="none"
          id="text_36"
          y={90.205}
          x={559.994}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={90.205} x={559.994} id="tspan1247" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={37}
          d="M800.064 126.166c.125-28.812.364-42.213.776-43.51.087-.275.498-.455 1.262-.554 3.191-.412 19.405-.61 50.265-.614l34.218-.003V158.7h-86.661z"
          fill="#c1e1ec"
          strokeWidth={0.241}
        />
        <text display="none"
          id="text_37"
          y={90.025}
          x={630.715}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={90.025} x={630.715} id="tspan1253" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={38}
          d="M892.117 121.416V81.485H961.395V161.346h-69.278z"
          fill="#ffea00"
          strokeWidth={0.241}
        />
        <text display="none"
          id="text_38"
          y={95.437}
          x={693.137}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={95.437} x={693.137} id="tspan1259" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={39}
          d="M962.675 129.053c.14-29.186.381-43.443.78-45.93.115-.716.266-.913.785-1.022 1.97-.414 10.229-.615 25.36-.615l17.018-.001V161.346h-44.096z"
          fill="#ffea00"
          strokeWidth={0.241}
        />
        <text display="none"
          id="text_39"
          y={95.076}
          x={737.158}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={95.076} x={737.158} id="tspan1265" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={40}
          d="M6.776 210.598v-46.605h49.326v93.211H6.776z"
          fill="#000000"
          strokeWidth={0.34}
        />
        <text display="none"
          id="text_40"
          y={159.972}
          x={19.135}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={159.972} x={19.135} id="tspan1271" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={41}
          d="M61.545 210.598v-46.605h55.791v93.211H61.545z"
          fill="#ff3333"
          strokeWidth={0.34}
        />
        <text display="none"
          id="text_41"
          y={160.482}
          x={63.274}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={160.482} x={63.274} id="tspan1277" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={42}
          d="M118.697 210.598v-46.605h63.954v93.211h-63.954z"
          fill="#ff3333"
          strokeWidth={0.34}
        />
        <text display="none"
          id="text_42"
          y={159.972}
          x={110.73}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={159.972} x={110.73} id="tspan1283" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={43}
          d="M188.208 210.65v-46.657H281.373l-.152 13.012c-.084 7.157-.245 27.955-.358 46.218l-.207 33.205-7.358.215c-4.047.119-24.848.316-46.224.44l-38.866.224z"
          fill="#bababa"
          strokeWidth={0.34}
        />
        <text display="none"
          id="text_43"
          y={161.248}
          x={168.392}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={161.248} x={168.392} id="tspan1289" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={44}
          d="M282.553 210.598v-46.605H381.206v93.211H282.553z"
          fill="#bababa"
          strokeWidth={0.34}
        />
        <text display="none"
          id="text_44"
          y={160.227}
          x={244.678}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={160.227} x={244.678} id="tspan1295" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={45}
          d="M386.65 210.598v-46.605h75.86v93.211h-75.86z"
          fill="#ffea00"
          strokeWidth={0.34}
        />
        <text display="none"
          id="text_45"
          y={157.676}
          x={316.117}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={157.676} x={316.117} id="tspan1301" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={46}
          d="M464.383 220.331c-.268-38.191-.07-54.356.674-54.973.234-.195 1.938-.5 3.787-.68 3.897-.38 41.848-.447 66.721-.119l17.095.225v91.74h-88.024z"
          fill="#ffea00"
          strokeWidth={0.34}
        />
        <text display="none"
          id="text_46"
          y={160.738}
          x={370.207}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={160.738} x={370.207} id="tspan1307" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={47}
          d="M554.7 210.598v-46.605h86.748v93.211h-86.747z"
          fill="#ffea00"
          strokeWidth={0.34}
        />
        <text display="none"
          id="text_47"
          y={160.738}
          x={443.687}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={160.738} x={443.687} id="tspan1313" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={48}
          d="M646.778 210.614v-46.69l13.012.204c7.156.113 19.556.3 27.555.416l14.543.21v91.678l-4.168.212c-2.292.117-14.691.313-27.555.437l-23.387.225z"
          fill="#1a1aff"
          strokeWidth={0.34}
        />
        <text display="none"
          id="text_48"
          y={159.462}
          x={497.521}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={159.462} x={497.521} id="tspan1319" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={49}
          d="M704.042 210.598v-46.605h94.572v93.211h-94.572z"
          fill="#1a1aff"
          strokeWidth={0.34}
        />
        <text display="none"
          id="text_49"
          y={160.482}
          x={557.479}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={160.482} x={557.479} id="tspan1325" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={50}
          d="M823.43 256.87c-12.389-.116-22.591-.28-22.672-.363-.281-.294-.562-78.103-.305-84.52l.259-6.463 1.7-.426c2.88-.721 20.908-1.093 53.325-1.099l30.871-.006v93.211l-20.326-.062c-11.179-.034-30.462-.156-42.852-.272z"
          fill="#1a1aff"
          strokeWidth={0.34}
        />
        <text display="none"
          id="text_50"
          y={160.227}
          x={626.622}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={160.227} x={626.622} id="tspan1331" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={51}
          d="M892.051 210.598v-46.605h69.398v93.211h-69.398z"
          fill="#ffea00"
          strokeWidth={0.34}
        />
        <text display="none"
          id="text_51"
          y={158.952}
          x={691.937}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={158.952} x={691.937} id="tspan1337" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={52}
          d="M974.987 256.875c-6.12-.114-11.236-.318-11.37-.452-.278-.277-.748-44.165-.783-73.125l-.024-19.305h43.884v93.211l-10.29-.061c-5.66-.033-15.298-.154-21.417-.268z"
          fill="#ffea00"
          strokeWidth={0.34}
        />
        <text display="none"
          id="text_52"
          y={159.972}
          x={739.903}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={159.972} x={739.903} id="tspan1343" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={53}
          d="M6.64 291.33v-28.625H55.95v57.25H6.64z"
          fill="#bababa"
          strokeWidth={0.241}
        />
        <text display="none"
          id="text_53"
          y={224.07}
          x={19.304}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={224.07} x={19.304} id="tspan1349" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={54}
          d="M61.484 291.33v-28.625h55.807v57.25H61.484z"
          fill="#1a1aff"
          strokeWidth={0.241}
        />
        <text display="none"
          id="text_54"
          y={221.364}
          x={62.783}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={221.364} x={62.783} id="tspan1355" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={55}
          d="M118.734 291.33v-28.625h66.632v57.25h-66.632z"
          fill="#1a1aff"
          strokeWidth={0.241}
        />
        <text display="none"
          id="text_55"
          y={221.364}
          x={111.855}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={221.364} x={111.855} id="tspan1361" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={56}
          d="M186.81 291.33v-28.625h94.534v57.25H186.81z"
          fill="#1a1aff"
          strokeWidth={0.241}
        />
        <text display="none"
          id="text_56"
          y={222.807}
          x={170.488}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={222.807} x={170.488} id="tspan1367" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={57}
          d="M282.627 291.33v-28.625h98.625v57.25h-98.625z"
          fill="#1a1aff"
          strokeWidth={0.241}
        />
        <text display="none"
          id="text_57"
          y={221.725}
          x={245.539}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={221.725} x={245.539} id="tspan1373" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={58}
          d="M386.624 291.33v-28.625h76.013v57.25h-76.013z"
          fill="#ffea00"
          strokeWidth={0.241}
        />
        <text display="none"
          id="text_58"
          y={220.823}
          x={315.358}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={220.823} x={315.358} id="tspan1379" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={59}
          d="M463.92 291.33v-28.625h89.483v57.25H463.92z"
          fill="#ffea00"
          strokeWidth={0.241}
        />
        <text display="none"
          id="text_59"
          y={221.003}
          x={377.96}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={221.003} x={377.96} id="tspan1385" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={60}
          d="M554.686 291.33v-28.625H641.283v57.25H554.686z"
          fill="#ffea00"
          strokeWidth={0.241}
        />
        <text display="none"
          id="text_60"
          y={220.823}
          x={443.99}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={220.823} x={443.99} id="tspan1391" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={61}
          d="M646.816 291.33v-28.625h55.807v57.25h-55.807z"
          fill="#c1e1ec"
          strokeWidth={0.241}
        />
        <text display="none"
          id="text_61"
          y={221.725}
          x={501.361}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={221.725} x={501.361} id="tspan1397" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={62}
          d="M704.146 291.33v-28.625h94.536v57.25h-94.536z"
          fill="#c1e1ec"
          strokeWidth={0.241}
        />
        <text display="none"
          id="text_62"
          y={221.725}
          x={557.469}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={221.725} x={557.469} id="tspan1403" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={63}
          d="M799.965 291.33v-28.625H886.562v57.25H799.965z"
          fill="#c1e1ec"
          strokeWidth={0.241}
        />
        <text display="none"
          id="text_63"
          y={219.56}
          x={628.19}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={219.56} x={628.19} id="tspan1409" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={64}
          d="M892.094 291.33v-28.625H959.93v57.25H892.094z"
          fill="#ff3333"
          strokeWidth={0.241}
        />
        <text display="none"
          id="text_64"
          y={220.101}
          x={691.514}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={220.101} x={691.514} id="tspan1415" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={65}
          d="M965.461 291.33v-28.625h41.134v57.25H965.46z"
          fill="#bababa"
          strokeWidth={0.241}
        />
        <text display="none"
          id="text_65"
          y={221.183}
          x={737.699}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={221.183} x={737.699} id="tspan1421" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={66}
          d="M6.839 430.503c-.179-.178-.325-24.752-.325-54.608V321.61H56.07l-.123 54.484-.122 54.484-24.331.125c-13.382.068-24.477-.022-24.656-.2z"
          fill="#bababa"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_66"
          y={289.073}
          x={18.88}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={289.073} x={18.88} id="tspan1427" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={67}
          d="M61.514 375.896v-54.6h55.791v109.2H61.514z"
          fill="#1a1aff"
          strokeWidth={0.34}
        />
        <text display="none"
          id="text_67"
          y={287.797}
          x={61.744}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={287.797} x={61.744} id="tspan1433" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={68}
          d="M118.666 375.872V321.25l13.012.196c7.156.108 21.987.29 32.957.404l19.945.207.21 28.45c.115 15.648.302 40.046.416 54.22l.207 25.768h-66.747z"
          fill="#1a1aff"
          strokeWidth={0.34}
        />
        <text display="none"
          id="text_68"
          y={285.501}
          x={110.475}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={285.501} x={110.475} id="tspan1439" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={69}
          d="M186.703 375.875v-54.621l18.795.195c10.337.108 31.443.289 46.901.402l28.106.207.213 18.074c.118 9.94.311 34.339.43 54.219l.217 36.144h-94.662z"
          fill="#1a1aff"
          strokeWidth={0.34}
        />
        <text display="none"
          id="text_69"
          y={283.459}
          x={172.219}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={283.459} x={172.219} id="tspan1445" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={70}
          d="M282.635 375.896v-54.6h98.654v109.2h-98.654z"
          fill="#1a1aff"
          strokeWidth={0.34}
        />
        <text display="none"
          id="text_70"
          y={281.674}
          x={245.444}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={281.674} x={245.444} id="tspan1451" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={71}
          d="M386.732 375.896v-54.6H462.593v109.2H386.732z"
          fill="#ffea00"
          strokeWidth={0.34}
        />
        <text display="none"
          id="text_71"
          y={284.735}
          x={315.352}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={284.735} x={315.352} id="tspan1457" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={72}
          d="M464.306 378.022c.103-28.86.284-53.187.403-54.058.167-1.226.381-1.634.95-1.804 1.4-.417 34.893-.615 60.82-.36l26.067.258.21 23.687c.117 13.028.307 37.426.425 54.219l.213 30.531h-89.275z"
          fill="#ffea00"
          strokeWidth={0.34}
        />
        <text display="none"
          id="text_72"
          y={286.266}
          x={376.33}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={286.266} x={376.33} id="tspan1463" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={73}
          d="M554.67 375.896v-54.6h86.747v109.2H554.67z"
          fill="#ffea00"
          strokeWidth={0.34}
        />
        <text display="none"
          id="text_73"
          y={283.715}
          x={445.473}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={283.715} x={445.473} id="tspan1469" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={74}
          d="M646.633 375.871v-54.624l10.801.197c5.94.109 18.398.29 27.684.405l16.883.207.209 40.697c.115 22.384.265 46.783.333 54.22l.125 13.522h-56.035z"
          fill="#c1e1ec"
          strokeWidth={0.34}
        />
        <text display="none"
          id="text_74"
          y={283.204}
          x={502.369}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={283.204} x={502.369} id="tspan1475" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={75}
          d="M704.125 375.896v-54.6h94.571v109.2h-94.571z"
          fill="#c1e1ec"
          strokeWidth={0.34}
        />
        <text display="none"
          id="text_75"
          y={283.97}
          x={560.285}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={283.97} x={560.285} id="tspan1481" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={76}
          d="M800.185 385.166c.013-41.925.28-62.237.823-62.78.537-.537 10.337-.738 46.703-.957l38.866-.235v109.301H800.17z"
          fill="#c1e1ec"
          strokeWidth={0.34}
        />
        <text display="none"
          id="text_76"
          y={281.674}
          x={625.091}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={281.674} x={625.091} id="tspan1487" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={77}
          d="M892.02 375.896v-54.6h68.037v109.2H892.02z"
          fill="#ff3333"
          strokeWidth={0.34}
        />
        <text display="none"
          id="text_77"
          y={281.674}
          x={688.875}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={281.674} x={688.875} id="tspan1493" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={78}
          d="M965.5 375.896v-54.6h41.162v109.2H965.5z"
          fill="#bababa"
          strokeWidth={0.34}
        />
        <text display="none"
          id="text_78"
          y={280.908}
          x={738.117}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={280.908} x={738.117} id="tspan1499" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={79}
          d="M6.767 507.8c-.125-.125-.227-16.888-.227-37.251v-37.023h49.327v74.5H31.431c-13.44 0-24.54-.102-24.664-.227z"
          fill="#bababa"
          strokeWidth={0.34}
        />
        <text display="none"
          id="text_79"
          y={358.981}
          x={18.37}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={358.981} x={18.37} id="tspan1505" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={80}
          d="M61.31 469.415v-35.89h56.131v71.78H61.31z"
          fill="#1a1aff"
          strokeWidth={0.34}
        />
        <text display="none"
          id="text_80"
          y={356.174}
          x={63.785}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={356.174} x={63.785} id="tspan1511" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={81}
          d="M118.802 469.415v-35.89h66.336v71.78h-66.336z"
          fill="#1a1aff"
          strokeWidth={0.34}
        />
        <text display="none"
          id="text_81"
          y={354.643}
          x={108.944}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={354.643} x={108.944} id="tspan1517" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={82}
          d="M186.725 469.415v-35.89h94.572v71.78h-94.572z"
          fill="#1a1aff"
          strokeWidth={0.34}
        />
        <text display="none"
          id="text_82"
          y={354.643}
          x={169.667}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={354.643} x={169.667} id="tspan1523" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={83}
          d="M282.544 469.415v-35.89h98.654v71.78h-98.654z"
          fill="#1a1aff"
          strokeWidth={0.34}
        />
        <text display="none"
          id="text_83"
          y={355.409}
          x={246.464}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={355.409} x={246.464} id="tspan1529" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={84}
          d="M386.754 469.415v-35.89H462.615v71.78h-75.86z"
          fill="#ffea00"
          strokeWidth={0.34}
        />
        <text display="none"
          id="text_84"
          y={354.133}
          x={310.759}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={354.133} x={310.759} id="tspan1535" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={85}
          d="M463.976 469.415v-35.89h89.469v71.78h-89.469z"
          fill="#ffea00"
          strokeWidth={0.34}
        />
        <text display="none"
          id="text_85"
          y={354.643}
          x={377.606}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={354.643} x={377.606} id="tspan1541" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={86}
          d="M554.806 469.415v-35.89H641.213v71.78H554.806z"
          fill="#ffea00"
          strokeWidth={0.34}
        />
        <text display="none"
          id="text_86"
          y={354.898}
          x={443.687}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={354.898} x={443.687} id="tspan1547" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={87}
          d="M646.77 469.415v-35.89h55.79v71.78h-55.791z"
          fill="#c1e1ec"
          strokeWidth={0.34}
        />
        <text display="none"
          id="text_87"
          y={356.684}
          x={501.859}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={356.684} x={501.859} id="tspan1553" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={88}
          d="M703.92 469.415v-35.89h94.572v71.78h-94.571z"
          fill="#c1e1ec"
          strokeWidth={0.34}
        />
        <text display="none"
          id="text_88"
          y={356.174}
          x={558.755}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={356.174} x={558.755} id="tspan1559" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={89}
          d="M800.08 469.415v-35.89H886.487v71.78H800.08z"
          fill="#c1e1ec"
          strokeWidth={0.34}
        />
        <text display="none"
          id="text_89"
          y={355.919}
          x={626.366}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={355.919} x={626.366} id="tspan1565" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={90}
          d="M891.93 470.776v-37.25h68.037v74.5H891.93z"
          fill="#ff3333"
          strokeWidth={0.34}
        />
        <text display="none"
          id="text_90"
          y={356.174}
          x={691.682}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={356.174} x={691.682} id="tspan1571" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={91}
          d="M965.41 470.776v-37.25h41.162v74.5H965.41z"
          fill="#bababa"
          strokeWidth={0.34}
        />
        <text display="none"
          id="text_91"
          y={357.45}
          x={737.097}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={357.45} x={737.097} id="tspan1577" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={92}
          d="M6.61 537.912l.177-28.405h48.986l.178 28.405.178 28.406H6.432z"
          fill="#bababa"
          strokeWidth={0.68}
        />
        <text display="none"
          id="text_92"
          y={411.336}
          x={19.484}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={411.336} x={19.484} id="tspan1583" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={93}
          d="M61.504 538.52v-27.904h55.807v55.807H61.504z"
          fill="#000000"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_93"
          y={409.532}
          x={63.144}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={409.532} x={63.144} id="tspan1589" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={94}
          d="M118.755 538.55v-27.873l28.023.225c15.414.123 30.209.344 32.879.491l4.854.267.317 15.475c.174 8.51.317 20.832.317 27.381v11.907h-66.39z"
          fill="#000000"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_94"
          y={408.81}
          x={110.05}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={408.81} x={110.05} id="tspan1595" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={95}
          d="M186.59 538.55v-27.875l40.05.224c22.028.123 43.124.348 46.878.5l6.827.276.25 2.478c.137 1.362.358 13.68.492 27.373l.244 24.897H186.59z"
          fill="#000000"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_95"
          y={409.171}
          x={169.586}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={409.171} x={169.586} id="tspan1601" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={96}
          d="M282.808 538.52v-27.904h98.625v55.807h-98.625z"
          fill="#000000"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_96"
          y={410.614}
          x={243.915}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={410.614} x={243.915} id="tspan1607" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={97}
          d="M386.885 538.52v-27.904h75.532v55.807h-75.532z"
          fill="#bababa"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_97"
          y={408.089}
          x={314.275}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={408.089} x={314.275} id="tspan1613" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={98}
          d="M464.026 541.526c.177-13.693.456-26.006.62-27.362l.296-2.466 2.466-.296c3.29-.395 74.304-.385 80.292.011 4.263.283 4.719.405 4.9 1.32.111.556.322 12.863.47 27.35l.269 26.34h-89.636z"
          fill="#bababa"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_98"
          y={408.089}
          x={377.419}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={408.089} x={377.419} id="tspan1619" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={99}
          d="M554.787 538.52v-27.904H641.384v55.807H554.787z"
          fill="#bababa"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_99"
          y={408.45}
          x={443.088}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={408.45} x={443.088} id="tspan1625" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={100}
          d="M646.676 538.547v-27.876l23.213.228c12.767.126 25.18.348 27.586.493l4.373.265.317 15.476c.174 8.512.317 20.834.317 27.383l.001 11.907h-55.807z"
          fill="#000000"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_100"
          y={408.45}
          x={501.181}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={408.45} x={501.181} id="tspan1631" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={101}
          d="M704.247 538.52v-27.904h94.295v55.807h-94.295z"
          fill="#000000"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_101"
          y={406.285}
          x={555.665}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={406.285} x={555.665} id="tspan1637" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={102}
          d="M800.127 540.083c.153-14.487.42-26.805.593-27.375.223-.732.829-1.115 2.075-1.31.968-.151 20.216-.421 42.774-.6l41.013-.327v55.952h-86.734z"
          fill="#000000"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_102"
          y={409.171}
          x={629.272}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={409.171} x={629.272} id="tspan1643" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={103}
          d="M891.874 538.067c0-15.596.162-28.43.36-28.52.613-.28 66.533.448 66.822.737.15.15.39 12.842.535 28.205l.264 27.934h-67.98z"
          fill="#ff3333"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_103"
          y={408.81}
          x={691.694}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={408.81} x={691.694} id="tspan1649" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={104}
          d="M965.482 537.798v-28.625h40.893v57.25h-40.893z"
          fill="#bababa"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_104"
          y={408.45}
          x={736.436}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={408.45} x={736.436} id="tspan1655" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={105}
          d="M6.634 608v-38.728h49.072v77.456H6.634z"
          fill="#bababa"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_105"
          y={461.49}
          x={20.206}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={461.49} x={20.206} id="tspan1661" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={106}
          d="M61.48 607.92v-38.488h55.806v76.975H61.48z"
          fill="#000000"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_106"
          y={460.408}
          x={63.144}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={460.408} x={63.144} id="tspan1667" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={107}
          d="M118.89 607.92v-38.488H185.28v76.975H118.89z"
          fill="#000000"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_107"
          y={462.212}
          x={109.69}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={462.212} x={109.69} id="tspan1673" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={108}
          d="M186.564 607.92v-38.488h94.776v76.975h-94.776z"
          fill="#000000"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_108"
          y={461.851}
          x={167.782}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={461.851} x={167.782} id="tspan1679" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={109}
          d="M282.623 607.92v-38.488h98.624v76.975h-98.624z"
          fill="#000000"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_109"
          y={461.49}
          x={246.441}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={461.49} x={246.441} id="tspan1685" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={110}
          d="M386.539 607.92v-38.488h76.013v76.975h-76.013z"
          fill="#bababa"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_110"
          y={461.49}
          x={313.193}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={461.49} x={313.193} id="tspan1691" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={111}
          d="M464.156 607.92v-38.488H553.158v76.975h-89.002z"
          fill="#bababa"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_111"
          y={461.851}
          x={377.419}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={461.851} x={377.419} id="tspan1697" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={112}
          d="M554.601 607.92v-38.488H641.2v76.975H554.6z"
          fill="#bababa"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_112"
          y={459.325}
          x={443.449}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={459.325} x={443.449} id="tspan1703" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={113}
          d="M646.811 607.92v-38.488h55.807v76.975h-55.807z"
          fill="#000000"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_113"
          y={461.49}
          x={500.459}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={461.49} x={500.459} id="tspan1709" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={114}
          d="M704.222 607.92v-38.488h94.295v76.975h-94.295z"
          fill="#000000"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_114"
          y={460.047}
          x={559.273}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={460.047} x={559.273} id="tspan1715" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={115}
          d="M799.96 607.92v-38.488H886.557v76.975H799.96z"
          fill="#000000"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_115"
          y={459.325}
          x={627.829}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={459.325} x={627.829} id="tspan1721" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={116}
          d="M891.849 607.92v-38.488h68.315v76.975H891.85z"
          fill="#ff3333"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_116"
          y={456.8}
          x={688.808}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={456.8} x={688.808} id="tspan1727" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={117}
          d="M965.456 607.92v-38.488h41.375v76.975h-41.375z"
          fill="#bababa"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_117"
          y={457.16}
          x={737.158}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={457.16} x={737.158} id="tspan1733" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={118}
          d="M6.636 678.672v-29.256h49.327v58.512H6.636z"
          fill="#bababa"
          strokeWidth={0.34}
        />
        <text display="none"
          id="text_118"
          y={510.788}
          x={20.411}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={510.788} x={20.411} id="tspan1739" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={119}
          d="M61.52 678.672v-29.256h55.79v58.512H61.519z"
          fill="#000000"
          strokeWidth={0.34}
        />
        <text display="none"
          id="text_119"
          y={510.788}
          x={61.489}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={510.788} x={61.489} id="tspan1745" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={120}
          d="M118.67 678.672v-29.256H185.348v58.512H118.67z"
          fill="#000000"
          strokeWidth={0.34}
        />
        <text display="none"
          id="text_120"
          y={511.554}
          x={111.496}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={511.554} x={111.496} id="tspan1751" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={121}
          d="M186.821 678.672v-29.256h94.572v58.512H186.82z"
          fill="#000000"
          strokeWidth={0.34}
        />
        <text display="none"
          id="text_121"
          y={514.871}
          x={170.178}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={514.871} x={170.178} id="tspan1757" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={122}
          d="M282.753 678.672v-29.256h98.654v58.512h-98.654z"
          fill="#000000"
          strokeWidth={0.34}
        />
        <text display="none"
          id="text_122"
          y={516.657}
          x={245.444}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={516.657} x={245.444} id="tspan1763" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={123}
          d="M386.737 678.672v-29.256H462.598v58.512H386.737z"
          fill="#bababa"
          strokeWidth={0.34}
        />
        <text display="none"
          id="text_123"
          y={513.085}
          x={315.607}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={513.085} x={315.607} id="tspan1769" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={124}
          d="M464.072 678.672v-29.256H553.201v58.512H464.072z"
          fill="#bababa"
          strokeWidth={0.34}
        />
        <text display="none"
          id="text_124"
          y={513.595}
          x={378.371}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={513.595} x={378.371} id="tspan1775" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={125}
          d="M554.561 678.672v-29.256h86.748v58.512H554.56z"
          fill="#bababa"
          strokeWidth={0.34}
        />
        <text display="none"
          id="text_125"
          y={512.319}
          x={444.197}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={512.319} x={444.197} id="tspan1781" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={126}
          d="M646.638 680.075v-30.659h56.02l-.115 6.89c-.063 3.788-.21 17.394-.325 30.236l-.21 23.347-12.802.21c-7.04.114-19.499.304-27.685.422l-14.883.213z"
          fill="#000000"
          strokeWidth={0.34}
        />
        <text display="none"
          id="text_126"
          y={515.126}
          x={501.348}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={515.126} x={501.348} id="tspan1787" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={127}
          d="M704.13 680.033v-30.617H798.7v61.234H704.13z"
          fill="#000000"
          strokeWidth={0.34}
        />
        <text display="none"
          id="text_127"
          y={514.871}
          x={561.561}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={514.871} x={561.561} id="tspan1793" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={128}
          d="M839.353 710.29c-13.471-.123-27.65-.246-31.507-.272l-7.015-.049-.212-9.61c-.116-5.285-.31-18.91-.429-30.276l-.218-20.667h86.497v61.234l-11.311-.067c-6.221-.037-22.333-.168-35.805-.292z"
          fill="#000000"
          strokeWidth={0.34}
        />
        <text display="none"
          id="text_128"
          y={513.34}
          x={629.428}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={513.34} x={629.428} id="tspan1799" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={129}
          d="M891.912 680.074v-30.658h68.126l-.217 19.476c-.118 10.712-.31 24.318-.426 30.237l-.21 10.761-15.352.209c-8.443.114-23.58.303-33.636.42l-18.285.212z"
          fill="#ff3333"
          strokeWidth={0.34}
        />
        <text display="none"
          id="text_129"
          y={512.829}
          x={691.682}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={512.829} x={691.682} id="tspan1805" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={130}
          d="M965.392 680.083v-30.667h41.26l-.223 24.579c-.123 13.518-.319 27.12-.434 30.228l-.211 5.65-7.864.215c-4.326.118-13.414.316-20.196.439l-12.332.223z"
          fill="#bababa"
          strokeWidth={0.34}
        />
        <text display="none"
          id="text_130"
          y={512.829}
          x={737.862}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={512.829} x={737.862} id="tspan1811" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={131}
          d="M6.52 755.749v-42.532l25.344.178 25.343.179.176 42.353.175 42.353H6.52z"
          fill="#c1e1ec"
          strokeWidth={0.68}
        />
        <text display="none"
          id="text_131"
          y={575.083}
          x={18.88}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={575.083} x={18.88} id="tspan1817" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={132}
          d="M60.269 755.757v-42.523H117.42v85.046H60.27z"
          fill="#c1e1ec"
          strokeWidth={0.68}
        />
        <text display="none"
          id="text_132"
          y={575.594}
          x={61.744}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={575.594} x={61.744} id="tspan1823" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={133}
          d="M118.78 755.757v-42.523h63.956v85.046H118.78z"
          fill="#c1e1ec"
          strokeWidth={0.68}
        />
        <text display="none"
          id="text_133"
          y={573.553}
          x={110.22}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={573.553} x={110.22} id="tspan1829" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={134}
          d="M188.405 755.794v-42.486l45.755.396c25.166.218 45.908.532 46.096.7.187.167.423 19.107.525 42.09l.185 41.786h-92.56z"
          fill="#ff3333"
          strokeWidth={0.68}
        />
        <text display="none"
          id="text_134"
          y={575.594}
          x={171.453}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={575.594} x={171.453} id="tspan1835" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={135}
          d="M282.977 755.757v-42.523h97.973v85.046h-97.973z"
          fill="#ff3333"
          strokeWidth={0.68}
        />
        <text display="none"
          id="text_135"
          y={573.553}
          x={243.913}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={573.553} x={243.913} id="tspan1841" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={136}
          d="M387.074 755.757v-42.523h75.52v85.046h-75.52z"
          fill="#bababa"
          strokeWidth={0.68}
        />
        <text display="none"
          id="text_136"
          y={572.532}
          x={308.718}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={572.532} x={308.718} id="tspan1847" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={137}
          d="M464.41 757.413c0-26.87.24-41.318.704-42.183.685-1.28 1.893-1.316 44.224-1.316h43.52l.003 36.57c.002 20.113.201 39.096.441 42.183l.437 5.613h-89.33z"
          fill="#bababa"
          strokeWidth={0.68}
        />
        <text display="none"
          id="text_137"
          y={572.532}
          x={376.585}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={572.532} x={376.585} id="tspan1853" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={138}
          d="M554.899 755.757v-42.523H641.306v85.046H554.899z"
          fill="#bababa"
          strokeWidth={0.68}
        />
        <text display="none"
          id="text_138"
          y={580.186}
          x={441.901}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={580.186} x={441.901} id="tspan1861" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={139}
          d="M646.975 755.076v-43.203h55.791V798.28h-55.791z"
          fill="#000000"
          strokeWidth={0.68}
        />
        <text display="none"
          id="text_139"
          y={574.063}
          x={499.562}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={574.063} x={499.562} id="tspan1867" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={140}
          d="M704.127 755.076v-43.203h94.571V798.28h-94.571z"
          fill="#000000"
          strokeWidth={0.68}
        />
        <text display="none"
          id="text_140"
          y={574.573}
          x={557.734}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={574.573} x={557.734} id="tspan1873" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={141}
          d="M799.997 755.247l.175-43.034H886.58l.176 43.034.175 43.033h-87.108z"
          fill="#000000"
          strokeWidth={0.68}
        />
        <text display="none"
          id="text_141"
          y={572.532}
          x={628.663}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={572.532} x={628.663} id="tspan1879" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={142}
          d="M892.362 755.076v-43.203h67.357V798.28h-67.357z"
          fill="#ff3333"
          strokeWidth={0.68}
        />
        <text display="none"
          id="text_142"
          y={572.532}
          x={693.468}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={572.532} x={693.468} id="tspan1885" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={143}
          d="M965.327 755.247l.175-43.034 20.582-.18 20.58-.18V798.28h-41.512z"
          fill="#bababa"
          strokeWidth={0.68}
        />
        <text display="none"
          id="text_143"
          y={571.001}
          x={735.821}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={571.001} x={735.821} id="tspan1891" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={144}
          d="M6.962 845.293v-43.78h50.515v87.56H6.962z"
          fill="#c1e1ec"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_144"
          y={640.818}
          x={20.928}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={640.818} x={20.928} id="tspan1897" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={145}
          d="M59.883 845.293v-43.78h57.25v87.56h-57.25z"
          fill="#c1e1ec"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_145"
          y={638.653}
          x={62.783}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={638.653} x={62.783} id="tspan1903" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={146}
          d="M118.576 845.293v-43.78h63.986v87.56h-63.986z"
          fill="#c1e1ec"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_146"
          y={637.21}
          x={107.164}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={637.21} x={107.164} id="tspan1909" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={147}
          d="M187.854 845.293v-43.78h93.332v87.56h-93.332z"
          fill="#ff3333"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_147"
          y={640.097}
          x={168.143}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={640.097} x={168.143} id="tspan1915" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={148}
          d="M282.63 845.293v-43.78h98.624v87.56h-98.625z"
          fill="#ff3333"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_148"
          y={640.457}
          x={241.389}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={640.457} x={241.389} id="tspan1921" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={149}
          d="M386.706 844.812v-43.299h76.013V888.11h-76.013z"
          fill="#bababa"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_149"
          y={641.901}
          x={314.997}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={641.901} x={314.997} id="tspan1927" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={150}
          d="M464.163 844.812v-43.299H553.165V888.11h-89.002z"
          fill="#bababa"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_150"
          y={642.262}
          x={373.811}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={642.262} x={373.811} id="tspan1933" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={151}
          d="M554.93 844.812v-43.299H641.044V888.11H554.93z"
          fill="#bababa"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_151"
          y={639.375}
          x={442.367}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={639.375} x={442.367} id="tspan1939" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={152}
          d="M646.818 844.812v-43.299h55.807V888.11h-55.807z"
          fill="#000000"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_152"
          y={642.262}
          x={499.376}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={642.262} x={499.376} id="tspan1945" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={153}
          d="M704.229 844.812v-43.299h94.294V888.11H704.23z"
          fill="#000000"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_153"
          y={639.736}
          x={558.551}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={639.736} x={558.551} id="tspan1951" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={154}
          d="M800.127 844.812v-43.299H886.724V888.11H800.127z"
          fill="#000000"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_154"
          y={642.262}
          x={627.468}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={642.262} x={627.468} id="tspan1957" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={155}
          d="M892.016 844.812v-43.299H959.851V888.11H892.016z"
          fill="#ff3333"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_155"
          y={642.622}
          x={691.694}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={642.622} x={691.694} id="tspan1963" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={156}
          d="M965.624 844.812v-43.299h40.893V888.11h-40.893z"
          fill="#bababa"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_156"
          y={643.344}
          x={736.797}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={643.344} x={736.797} id="tspan1969" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={157}
          d="M6.962 930.692v-38.733h50.52l-.122 38.608-.123 38.608-25.138.125-25.137.124z"
          fill="#c1e1ec"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_157"
          y={701.797}
          x={20.206}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={701.797} x={20.206} id="tspan1975" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={158}
          d="M60.203 969.095c-.176-.177-.32-17.604-.32-38.728v-38.408h57.25v77.457H88.828c-15.567 0-28.448-.145-28.625-.321z"
          fill="#c1e1ec"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_158"
          y={700.354}
          x={61.7}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={700.354} x={61.7} id="tspan1981" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={159}
          d="M118.576 930.687V891.96h63.986v77.457h-63.986z"
          fill="#c1e1ec"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_159"
          y={702.158}
          x={107.525}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={702.158} x={107.525} id="tspan1987" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={160}
          d="M187.854 931.967V891.96h93.48l-.351 39.567c-.193 21.761-.396 39.612-.452 39.667-.055.055-20.93.254-46.389.442l-46.288.34z"
          fill="#ff3333"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_160"
          y={705.405}
          x={169.586}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={705.405} x={169.586} id="tspan1993" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={161}
          d="M282.63 931.89v-39.93h98.624V971.82h-98.625z"
          fill="#ff3333"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_161"
          y={706.488}
          x={239.224}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={706.488} x={239.224} id="tspan1999" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={162}
          d="M386.546 932.612v-39.21h76.013V971.822h-76.013z"
          fill="#1a1aff"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_162"
          y={704.684}
          x={313.914}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={704.684} x={313.914} id="tspan2005" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={163}
          d="M464.749 970.739c-.102-.331-.314-17.867-.471-38.97l-.286-38.366h89.253l-.11 23.453c-.061 12.9-.248 30.435-.417 38.969l-.305 15.515h-43.74c-34.572 0-43.778-.126-43.924-.601z"
          fill="#1a1aff"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_163"
          y={702.88}
          x={375.254}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={702.88} x={375.254} id="tspan2011" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={164}
          d="M554.93 932.612v-39.21H641.044V971.822H554.93z"
          fill="#1a1aff"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_164"
          y={704.323}
          x={442.728}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={704.323} x={442.728} id="tspan2017" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={165}
          d="M646.497 932.612v-39.21h56.085l-.141 26.822c-.078 14.751-.272 32.252-.431 38.891l-.29 12.071-15.903.318c-8.747.174-21.172.317-27.611.317h-11.709z"
          fill="#ffea00"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_165"
          y={705.766}
          x={502.985}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={705.766} x={502.985} id="tspan2023" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={166}
          d="M704.229 932.612v-39.21h94.294V971.822H704.23z"
          fill="#ffea00"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_166"
          y={703.601}
          x={560.355}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={703.601} x={560.355} id="tspan2029" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={167}
          d="M817.69 971.46l-16.676-.132-.266-3.963c-.147-2.18-.376-19.713-.509-38.963l-.241-35h86.566V971.822l-26.1-.114c-14.354-.062-33.603-.173-42.774-.247z"
          fill="#ffea00"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_167"
          y={702.519}
          x={628.55}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={702.519} x={628.55} id="tspan2035" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={168}
          d="M891.856 932.612v-39.21h69.277V971.822H891.855z"
          fill="#bababa"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_168"
          y={706.488}
          x={691.694}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={706.488} x={691.694} id="tspan2041" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={169}
          d="M972.13 971.461l-8.487-.143-.284-9.25c-.156-5.088-.367-22.619-.47-38.958l-.185-29.707H1006.837v78.418l-13.11-.108c-7.21-.06-16.928-.173-21.596-.252z"
          fill="#bababa"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_169"
          y={707.931}
          x={736.075}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={707.931} x={736.075} id="tspan2047" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={170}
          d="M6.407 1016.11v-40.893h50.996v81.786H6.407z"
          fill="#bababa"
          strokeWidth={0.962}
        />
        <text display="none"
          id="text_170"
          y={768.549}
          x={19.845}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={768.549} x={19.845} id="tspan2053" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={171}
          d="M60.285 1015.88v-41.374H117.054v82.748H60.285z"
          fill="#bababa"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_171"
          y={770.353}
          x={63.865}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={770.353} x={63.865} id="tspan2059" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={172}
          d="M118.615 1016l.123-41.254 31.873-.124 31.872-.123v82.755h-63.991z"
          fill="#bababa"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_172"
          y={768.549}
          x={107.886}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={768.549} x={107.886} id="tspan2065" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={173}
          d="M188.257 1013.955v-40.412h92.851v80.824h-92.851z"
          fill="#ff3333"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_173"
          y={767.106}
          x={168.864}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={767.106} x={168.864} id="tspan2071" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={174}
          d="M282.711 1013.955v-40.412h98.625v80.824H282.71z"
          fill="#ff3333"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_174"
          y={763.137}
          x={242.472}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={763.137} x={242.472} id="tspan2077" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={175}
          d="M386.949 1013.955v-40.412h75.532v80.824h-75.532z"
          fill="#1a1aff"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_175"
          y={762.415}
          x={311.028}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={762.415} x={311.028} id="tspan2083" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={176}
          d="M464.084 1013.955v-40.412h89.003v80.824H464.085z"
          fill="#1a1aff"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_176"
          y={763.137}
          x={373.45}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={763.137} x={373.45} id="tspan2089" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={177}
          d="M554.53 1013.955v-40.412H641.127v80.824H554.53z"
          fill="#1a1aff"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_177"
          y={762.415}
          x={443.088}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={762.415} x={443.088} id="tspan2095" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={178}
          d="M646.58 1013.955v-40.412h55.807v80.824H646.58z"
          fill="#ffea00"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_178"
          y={762.054}
          x={503.345}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={762.054} x={503.345} id="tspan2101" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={179}
          d="M703.83 1013.955v-40.412h94.775v80.824H703.83z"
          fill="#ffea00"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_179"
          y={764.58}
          x={560.355}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={764.58} x={560.355} id="tspan2107" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={180}
          d="M800.21 1013.955v-40.412h86.596v80.824H800.21z"
          fill="#ffea00"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_180"
          y={763.497}
          x={630.354}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={763.497} x={630.354} id="tspan2113" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={181}
          d="M892.098 1015.399v-41.856h69.278v83.711h-69.278z"
          fill="#bababa"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_181"
          y={764.58}
          x={691.694}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={764.58} x={691.694} id="tspan2119" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={182}
          d="M974.805 1056.894l-11.347-.138-.32-26.332c-.174-14.482-.318-33.205-.318-41.606v-15.275H1006.598v83.711l-10.223-.111c-5.623-.061-15.33-.173-21.571-.25z"
          fill="#bababa"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_182"
          y={764.941}
          x={736.797}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={764.941} x={736.797} id="tspan2125" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={183}
          d="M6.884 1088.77v-30.073H57.406l-.124 29.948-.124 29.949-25.137.124-25.137.125z"
          fill="#bababa"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_183"
          y={822.311}
          x={23.453}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={822.311} x={23.453} id="tspan2131" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={184}
          d="M60.285 1088.766v-30.069H117.054v60.137H60.285z"
          fill="#bababa"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_184"
          y={820.868}
          x={64.226}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={820.868} x={64.226} id="tspan2137" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={185}
          d="M118.818 1088.769v-30.072H182.811l-.124 29.948-.123 29.949-31.873.123-31.873.124z"
          fill="#bababa"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_185"
          y={818.342}
          x={109.69}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={818.342} x={109.69} id="tspan2143" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={186}
          d="M188.096 1089.415v-29.418l46.065.353c25.336.194 46.155.443 46.265.553.274.272.94 57.117.676 57.57-.116.199-21.09.361-46.609.361h-46.397z"
          fill="#000000"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_186"
          y={820.868}
          x={170.668}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={820.868} x={170.668} id="tspan2149" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={187}
          d="M282.872 1089.487v-29.347h99.586v58.694h-99.586z"
          fill="#000000"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_187"
          y={822.311}
          x={245.358}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={822.311} x={245.358} id="tspan2155" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={188}
          d="M384.303 1090.233c.127-22.657.29-28.732.785-29.227.5-.5 8.358-.66 39.09-.795l38.463-.17v58.793h-78.498z"
          fill="#000000"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_188"
          y={820.868}
          x={313.914}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={820.868} x={313.914} id="tspan2161" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={189}
          d="M464.076 1118.055c-.445-1.16.226-54.061.707-55.75l.41-1.443 10.31-.338c5.671-.185 25.279-.208 43.573-.05l33.263.288.278 5.342c.154 2.938.34 15.95.414 28.916l.136 23.574-44.395.122c-40.664.113-44.42.057-44.696-.661z"
          fill="#000000"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_189"
          y={820.507}
          x={379.945}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={820.507} x={379.945} id="tspan2167" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={190}
          d="M554.85 1089.49v-29.35H641.456l-.124 29.227-.124 29.227-43.178.122-43.178.123z"
          fill="#000000"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_190"
          y={822.672}
          x={448.14}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={822.672} x={448.14} id="tspan2173" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={191}
          d="M646.74 1089.415v-29.418l27.542.352c15.149.194 27.577.388 27.619.433.042.044.235 13.124.43 29.066l.354 28.986H646.74z"
          fill="#c1e1ec"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_191"
          y={823.394}
          x={500.82}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={823.394} x={500.82} id="tspan2179" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={192}
          d="M703.99 1089.49v-29.35h94.783l-.124 29.227-.124 29.227-47.267.122-47.268.123z"
          fill="#c1e1ec"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_192"
          y={820.868}
          x={559.273}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={820.868} x={559.273} id="tspan2185" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={193}
          d="M800.287 1090.194c.13-22.946.288-28.723.792-29.035 1.16-.716 16.345-1.019 51.169-1.019h34.566l-.124 29.227-.124 29.227-43.22.122-43.221.123z"
          fill="#c1e1ec"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_193"
          y={821.95}
          x={628.55}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={821.95} x={628.55} id="tspan2191" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={194}
          d="M892.098 1088.769v-30.072h69.285l-.124 29.948-.124 29.949-34.518.123-34.519.123z"
          fill="#bababa"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_194"
          y={820.868}
          x={694.581}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={820.868} x={694.581} id="tspan2197" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
        <path onClick={((e) => this.props.handlePaint(e))} onContextMenu={((e) => this.props.handleErase(e))}
          transform="scale(.75)"
          id={195}
          d="M962.82 1088.766v-30.069H1006.598v60.137h-43.78z"
          fill="#bababa"
          strokeWidth={0.481}
        />
        <text display="none"
          id="text_195"
          y={819.786}
          x={736.075}
          style={{
            lineHeight: 1.25,
          }}
          xmlSpace="preserve"
          fontSize={10}
          fontFamily="sans-serif"
          strokeWidth={0.75}
        >
          <tspan y={819.786} x={736.075} id="tspan2203" strokeWidth={0.75}>
            {"0"}
          </tspan>
        </text>
      </svg>

    return x
  }
}

export default SvgCompa;

// change props to this.props
// turn to component with constructor
// pre fill it up AND THEN add 0

// add onload to prepare the portrait

// adding onclicks and oncontextmenus
// adding display=none
