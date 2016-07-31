
$unit = ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve"]
$ten = ["zero","ten","twenty","thirty"]
$past_ten = ["ten","eleven","twelve", "thirteen", "fourteen", "fiveteen", "sixteen", "seventeen", "eighteen", "nineteen"]

def get_time hour, minute
	if minute == 0 then return "#{$unit[hour]} o' clock" end
	if minute == 60 then return "#{$unit[hour+1]} o' clock" end
	if minute <= 30 then return "#{get_minute minute} past #{$unit[hour]}" end
	return "#{get_minute 60-minute} to #{$unit[hour+1]}"
end

def get_minute minute
	if minute == 30 then return "half" end
	if minute == 15 or minute == 45 then return "quarter" end
	if minute == 1 then return "one minute" end
	if minute <= 10 then return "#{$unit[minute]} minutes" end
	if minute <20 then return "#{$past_ten[minute-10]} minutes" end
	return "#{$ten[minute/10]} #{$unit[minute%10]} minutes"
end

hour = gets.to_i
minute = gets.to_i

puts get_time hour,minute