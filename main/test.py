import robloxpy as rpy
import roblox as rob
import robloxapi as rpi
import argparse

import requests
# print(rob.BaseGroup.get_members(self=5202521))

groupID = 5202521

#1666631405 id of bot account

# rpi.client.Action()


print(rpy.Group.External.GetOwner(groupID))
print(rpy.Group.External.GetMemberCount(groupID))
# rob.BaseGroup = rob.BaseGroup.id(groupID)
# print(rob.BaseGroup.get_members())

nameList = rpy.Group.External.GetMembersList(groupID,370)

for i in nameList:
  print("test=============")
  for j in i:
        print(j)



