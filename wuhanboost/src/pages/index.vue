<template>
	<div id="index-wrapper">
		<div class="intro">
			<p>
				即将于<span class="note-font">4月15号</span>开跑的武汉马拉松是最年轻的金牌赛事，<br/>
				自2016年第一届开始就备受跑友好评。马拉松开赛前一<br/>
				周不适宜大量运动，但是可以跟着小悦悦来一个短距离<br/>
				的热身跑，以便在赛事中保持最佳状态哦！<br/></p>

			<p>
				没中签的跑友也可以通过线上活动弥补一下遗憾，助力武<br/>
				汉马拉松，同时还有机会获得由特步提供的<span class="note-font">精美奖品</span>哦！<br/>
				</p>
		</div>
		<div class="selection clr">
			<ul>
				<li class="race">
					<div class="circle">3<span class="unit">KM</span></div>
					<div class="join-btn">助力迷你马</div>
				</li>
				<li class="race">
					<div class="circle">5<span class="unit">KM</span></div>
					<div class="join-btn">助力半马</div>
				</li>
				<li class="race">
					<div class="circle">10<span class="unit">KM</span></div>
					<div class="join-btn">助力全马</div>
				</li>
			</ul>
		</div>
		<div class="period">
			<span class="period-text clr mt30">活动时间</span>
			<span class="period-text clr">2018年4月10日—4月15日</span>
		</div>

		<div class="prize">
			<div class="prize-title">奖品设置</div>
			<ul>
				<li class="prize-item">
					<div class="prize-img"><img src="../assets/images/prize_card.png"/></div>
					<div class="prize-note">助力迷你马<br/>
线上马直通卡<br/>
名额<span class="note-font">10</span>个</div>
				<li class="prize-item">
				<li class="race">
					<div class="prize-img"><img src="../assets/images/prize_accessories.png"/></div>
					<div class="prize-note">助力半马<br/>
特步运动装备<br/>
名额<span class="note-font">20</span>个</div>
				<li class="prize-item">
				<li class="race">
					<div class="prize-img"><img src="../assets/images/prize_shoes.png"/></div>
					<div class="prize-note">助力全马<br/>
特步跑鞋<br/>
名额<span class="note-font">10</span>个</div>
				</li>
			</ul>
		</div>

		<div class="rule-link note-font">活动规则></div>

		<div class="toast">
			<div class="toast-close">
				<img src="../assets/images/close.png" />
			</div>
			<div class="toast-text">
			是否确认报名 {{ race_title }} <br/>
在活动期间需要使用悦跑圈<br/>
累计完成 {{ race_distance }} 跑步
			</div>
			<div class="toast-btn">确认</div>
		</div>
	</div>
</template>

<script>
export default {
        data() {
			return {
				message: 'test'
			}
		}
    }
</script>

<style>
#index-wrapper {
	width: 100%;
	height: 2000px;
	background:  #001d55 url("../assets/images/index_bg.jpg") no-repeat 50% 0;
}

#index-wrapper .intro {
	font-family: PingFang-SC-Regular;
	font-size: 26px;
	color: #E2F8FF;
	line-height: 50px;
	position: relative;
	top:561px;
	width: 650px;
	height: 350px;
	text-align: left;
}

#index-wrapper .selection {
	position: relative;
	top: 561px;
}

.selection .race {
	margin-left: 20px;
}

.selection .circle {
	width: 146px;
	height: 146px;
	background-color: #063698;
	font-family: PingFang-SC-Semibold;
	font-size: 64px;
	color: #FFFFFF;
	border-radius: 50%;  
	-moz-border-radius: 50%;  
  	-webkit-border-radius: 50%;  
  	text-align: center;
  	vertical-align: middle;
  	line-height: 146px;
}

.circle .unit {
	font-size: 36px;
}

.selection .join-btn {
	width: 200px;
	height: 48px;
	font-size: 26px;
	background-color: #0D5BFF;
	border-radius: 10px;  
	-moz-border-radius: 10px;  
  	-webkit-border-radius:20px;  
  	line-height: 48px;
	margin-top: 29px;
}

.period {
	width: 460px;
	height: 156px;
	position: relative;
	top: 623px;
	border: 4px solid rgba(133,133,133,0.28);
	vertical-aligh: middle;
}

.period-text {
	font-size: 30px;
	color: #FFFFFF;
}

.mt30 {
	margin-top: 30px;
}

.prize {
	margin-top: 700px;
	width: 700px;
	height: 306px;
	background-color: #ffffff;
}

.prize-item {
	margin: 0 30px;
}

.prize-title {
	position: relative;
	top: -24px;
	width: 200px;
	height: 48px;
	font-size: 26px;
	background-color: #0D5BFF;
	border-radius: 10px;  
	-moz-border-radius: 10px;  
  	-webkit-border-radius:20px;  
  	line-height: 48px;
	margin-top: 29px;
}

.prize-note {
	margin-top: 30px;
	line-height: 30px;
	font-weight: bold;
	font-size: 22px;
	color: #000000;
}

.rule-link {

  	margin-top: 50px;
	font-size: 30px;
}

.toast {
	top: 302px;
	z-index: 9999;
	width: 666px;
	height: 480px;    
	position: absolute; 
	left: 50%; top: 50%;
    transform: translate(-50%, -50%);    /* 50%为自身尺寸的一半 */
	background-color: #ffffff;
}

.toast-text {
	margin-top: 100px;	
	font-size: 30px;
	color: #000000;
	line-height: 60px;
}

.toast-btn {
	background: #0D5BFF;
	width: 588px;
	height: 88px;
	line-height: 88px;
	font-size: 34px;
	text-align: center;
	margin-top: 54px;	
}

.toast-close {
	float: right;
    -webkit-filter: grayscale(100%); /* Chrome, Safari, Opera */
    filter: grayscale(100%);
}

</style> 