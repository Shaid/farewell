#!/bin/bash
for i in `seq 0 99`;
do
  wget -P female https://randomuser.me/api/portraits/women/$i.jpg
  wget -P male https://randomuser.me/api/portraits/men/$i.jpg
done
