/**
 * translate(num) if num is not a number, it must be return '零'
 * @auth: Wu Jiapeng
 */
var Num2CNCharacter = {
	nums : ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖', '拾'],
	unit : ['拾', '佰' , '仟' ,'萬', '亿'],
	
	translate : function(num) {
		num = parseInt(num);
		
		if(typeof(num) == 'NaN') {
			return this.nums[0];
		}
		
		if(num < 0) {
			return this.nums[0];
		}
		
		return this.calculate(num);
	},
	
	calculate : function(num) {
		if(num < 0) {
			return '';
		}
		if(num < 10) {
			return this.nums[num];
		}

		var retNum = '';

		if(num < 100) {
			var remain = parseInt(num % 10);
			if(remain != 0) {
				retNum += this.nums[parseInt(num / 10)] + this.unit[0] + this.nums[remain];
			}else {
				retNum += this.nums[parseInt(num / 10)] + this.unit[0];
			}
			 return retNum;
		}

		if(num < 1000) {
			var remain = parseInt(num % 100);
			var index = 1;
			if(remain == 0) {
				return this.nums[parseInt(num / 100)] + this.unit[index];
			}
			var numStr = num + '';
			var len = numStr.length;
			index ++;
			for(var i = 0; i < len; i ++) {
				var a = numStr.charAt(i);
				retNum += this.nums[parseInt(a)];
				index--;
				if(index >= 0 && a != '0') {
					retNum += this.unit[index];
				}
			}
			return retNum;
		}
		
		if(num < 10000) {
			var remain = parseInt(num % 1000);
			var index = 2;
			if(remain == 0) {
				return this.nums[parseInt(num / 1000)] + this.unit[index];
			}
			var numStr = num + '';
			var len = numStr.length;
			var preIsZero = false;
			index ++;
			for(var i = 0; i < len; i ++) {
				var a = numStr.charAt(i);
				index--;
				if(preIsZero && a == '0') continue;
				preIsZero = (a == '0');
				retNum += this.nums[parseInt(a)];
				if(index >= 0 && a != '0') {
					retNum += this.unit[index];
				}
			}
			return retNum;
		}
		
		if(num >= 10000 && num < 100000000) {
			var remain = parseInt(num % 10000);
			var index = 2;
			if(remain == 0) {
				var tenK = num / 10000;
				retNum += this.calculate(tenK);
				retNum += this.unit[3];
				return retNum;
			}
			var tenK = parseInt(num / 10000);
			retNum += this.calculate(tenK);
			retNum += this.unit[3];
			remain = num % 10000;
			if(remain < 1000 || tenK % 10 == 0) {
				retNum += this.nums[0];
			}
			retNum += this.calculate(remain);
			return retNum;
		}
		
		if(num >= 100000000) {
			var remain = parseInt(num % 100000000);
			var index = 4;
			if(remain == 0) {
				var billion = num / 100000000;
				retNum += this.calculate(tenK);
				retNum += this.unit[index];
				return retNum;
			}
			var billion = parseInt(num / 100000000);
			retNum += this.calculate(billion);
				retNum += this.unit[index];
			
			if(remain < 10000000 || billion % 10 == 0) {
				retNum += this.nums[0];
			}
			
			retNum += this.calculate(remain);
			return retNum;
		}
	}
}
