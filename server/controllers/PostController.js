const express = require('express');
const PostMemories = require('./../models/PostModel')

exports.getAllPosts = async (req,res) => {
    try  {
      const post = await PostMemories.find();
      res.status(200).json({
          posts: post
      })
    } catch (err) {
        res.status(400).json({
            error: err
        })
    }
};

exports.addPost = async (req,res) => {
    console.log(req.body);
    try  {
      const post = await PostMemories.create(req.body);
      res.status(200).json({
          posts: post
      });
    } catch (err) {
        console.log(err);
        res.status(400).json({
            error: err
        });
    }
};
