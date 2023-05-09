package com.sou.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sou.dao.RewardsDao;
import com.sou.model.Entrance;
import com.sou.model.Rewards;

@Service
public class RewardsServiceImpl implements RewardsService{
	
	@Autowired
    private RewardsDao rewardsdao;
	@Override
	public void add(Rewards r) {
		// TODO Auto-generated method stub
		rewardsdao.save(r);
	}

	@Override
	public void modify(Rewards r) {
		// TODO Auto-generated method stub
		rewardsdao.save(r);
	}

	@Override
	public void removeById(int id) {
		// TODO Auto-generated method stub
		rewardsdao.deleteById(id);
	}

	@Override
	public Rewards getById(int id) {
		// TODO Auto-generated method stub
		Optional<Rewards> opt = rewardsdao.findById(id);
		if(opt.isPresent()) {
			return opt.get();
		}
		return null;
	}

	@Override
	public List<Rewards> getAll() {
		// TODO Auto-generated method stub
		Iterable<Rewards> itr = rewardsdao.findAll();
		List<Rewards> lst = new ArrayList<Rewards>();
		itr.forEach(ele->lst.add(ele));
		return lst;
	}

}
