year=input("inseriscil'anno :")
if ((int(year)%400)==0):
    if(((int(year)%100)==0)):
        print("� un anno normale")
    else:
        print ("� un anno bisesitile")
elif((int(year)%4)==0):
       print("� un anno bisestile")
else:
       print("� un anno normale")