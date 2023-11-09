import calendar

print('Welcome to super calendar\n')

year = int(input('Please enter a year: '))
month = int(input('Please enter a month number: '))

print(calendar.month(year, month))

print('Good bye!')
